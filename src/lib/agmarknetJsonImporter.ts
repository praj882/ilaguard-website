import { get, ref, update } from "firebase/database";
import { MANDIS } from "@/data/mandis";
import { CROPS } from "@/data/crops";
import { database } from "@/lib/firebase";

type RawAgmarknetRow = {
  cmdt_name?: unknown;
  max_price?: unknown;
  min_price?: unknown;
  grade_name?: unknown;
  state_name?: unknown;
  arrival_qty?: unknown;
  market_name?: unknown;
  model_price?: unknown;
  arrival_date?: unknown;
  variety_name?: unknown;
  district_name?: unknown;
  unit_name_price?: unknown;
};

export type AgmarknetPreviewRow = {
  index: number;
  marketName: string;
  districtName: string;
  commodityName: string;
  date: string;
  min: number;
  modal: number;
  max: number;
  variety: string;
  grade: string;
  mandiId?: string;
  cropId?: string;
  status: "ready" | "unmatched" | "invalid";
  reason?: string;
  raw: RawAgmarknetRow;
};

export type AgmarknetPreview = {
  rows: AgmarknetPreviewRow[];
  paginationKnown: boolean;
  paginationComplete: boolean;
  paginationMessage: string;
};

export type AgmarknetImportResult = {
  historyWritten: number;
  historyAlreadyExists: number;
  currentUpdated: number;
  currentSkipped: number;
  unmatchedOrInvalid: number;
  errors: string[];
};

function text(value: unknown): string {
  return value == null ? "" : String(value).trim();
}

/*function normalize(value: unknown): string {
  return text(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}*/

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function normalizeMarket(value: unknown): string {
  return normalize(text(value))
    .replace(/\b(apmc|mandi|market yard|market)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parsePrice(value: unknown): number | null {
  const raw = text(value).replace(/,/g, "");
  if (!raw) return null;

  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
}

function parseDate(value: unknown): string | null {
  const raw = text(value);
  if (!raw) return null;

  // AGMARKNET example: 11-10-2026
  const dmy = raw.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (dmy) return `${dmy[3]}-${dmy[2]}-${dmy[1]}`;

  // Also support an ISO date.
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return raw;

  return null;
}

function isSupportedUnit(value: unknown): boolean {
  const raw = text(value).toLowerCase();
  const normalized = normalize(raw);

  const isRupee =
    raw.includes("₹") ||
    normalized.includes("rs") ||
    normalized.includes("rupee") ||
    normalized.includes("inr");

  return isRupee && normalized.includes("quintal");
}

/**
 * Keep market aliases here so this feature can be removed without editing
 * src/data/mandis.ts.
 *
 * Add exact AGMARKNET market names here as you encounter them.
 */
const AGMARKNET_MARKET_ALIASES: Record<string, string> = {
  "bihpur apmc": "bihpur",
  "benipatti apmc": "benipatti",
};

const COMMODITY_ALIASES: Record<string, string> = {
  "bhindi ladies finger": "okra",
  "ladies finger": "okra",
  bhindi: "okra",
  okra: "okra",
  brinjal: "brinjal",
  aubergine: "brinjal",
  "cucumbar kheera": "Cucumber",
  "pointed gourd parval": "pointedgourd",
  "little gourd kundru": "LittleGourd",
  
};

function findMandi(marketName: string, districtName: string) {
  const normalizedMarket = normalize(marketName);
  const normalizedDistrict = normalize(districtName);

  if (!normalizedMarket || !normalizedDistrict) return undefined;

  const aliasId = AGMARKNET_MARKET_ALIASES[normalizedMarket];

  const candidates = MANDIS.filter((mandi) => {
    if (normalize(mandi.stateName) !== "bihar") return false;
    if (normalize(mandi.districtName) !== normalizedDistrict) return false;

    if (aliasId) return mandi.id === aliasId;

    return normalizeMarket(mandi.name) === normalizeMarket(marketName);
  });

  // Never guess if the market name and district do not uniquely identify
  // one mandi.
  return candidates.length === 1 ? candidates[0] : undefined;
}

function findCrop(commodityName: string) {
  const normalizedCommodity = normalize(commodityName);
  const aliasId = COMMODITY_ALIASES[normalizedCommodity];

  if (aliasId) {
    return CROPS.find((crop) => crop.id === aliasId);
  }

  const candidates = CROPS.filter((crop) => {
    return (
      normalize(crop.name) === normalizedCommodity ||
      normalize(crop.id) === normalizedCommodity ||
      normalize(crop.nameHindi) === normalizedCommodity
    );
  });

  return candidates.length === 1 ? candidates[0] : undefined;
}


function extractRawRows(json: unknown): {
  rawRows: RawAgmarknetRow[];
  pagination: Array<{
    total_count?: number;
    total_pages?: number;
    current_page?: number;
    items_per_page?: number;
  }>;
} {
  const root = json as {
    status?: unknown;
    data?: {
      records?: Array<{
        data?: unknown;
        pagination?: unknown;
      }>;
    };
  };

  if (root?.status !== true) {
    throw new Error(
      "This does not look like a successful AGMARKNET JSON response. Check the status field."
    );
  }

  const recordGroups = root?.data?.records;
  if (!Array.isArray(recordGroups)) {
    throw new Error("Could not find data.records in the uploaded JSON.");
  }

  const rawRows: RawAgmarknetRow[] = [];
  const pagination: Array<{
    total_count?: number;
    total_pages?: number;
    current_page?: number;
    items_per_page?: number;
  }> = [];

  for (const group of recordGroups) {
    if (!group || typeof group !== "object") continue;

    if (Array.isArray(group.data)) {
      for (const row of group.data) {
        if (row && typeof row === "object") {
          rawRows.push(row as RawAgmarknetRow);
        }
      }
    }

    if (Array.isArray(group.pagination)) {
      for (const page of group.pagination) {
        if (page && typeof page === "object") {
          pagination.push(
            page as {
              total_count?: number;
              total_pages?: number;
              current_page?: number;
              items_per_page?: number;
            }
          );
        }
      }
    }
  }

  return { rawRows, pagination };
}

export function previewAgmarknetJson(json: unknown): AgmarknetPreview {
  const { rawRows, pagination } = extractRawRows(json);

  const paginationKnown = pagination.length > 0;
  const paginationComplete =
    paginationKnown &&
    pagination.every((page) => {
      const current = Number(page.current_page);
      const total = Number(page.total_pages);
      return (
        Number.isFinite(current) &&
        Number.isFinite(total) &&
        total > 0 &&
        current >= total
      );
    });

  const rows: AgmarknetPreviewRow[] = rawRows.map((raw, index) => {
    const marketName = text(raw.market_name);
    const districtName = text(raw.district_name);
    const commodityName = text(raw.cmdt_name);
    const date = parseDate(raw.arrival_date) ?? "";
    const min = parsePrice(raw.min_price);
    const modal = parsePrice(raw.model_price);
    const max = parsePrice(raw.max_price);
    const variety = text(raw.variety_name);
    const grade = text(raw.grade_name);

    const mandi = findMandi(marketName, districtName);
    const crop = findCrop(commodityName);

    let reason = "";

    if (normalize(text(raw.state_name)) !== "bihar") {
      reason = "यह importer अभी केवल बिहार के लिए है।";
    } else if (!marketName || !districtName) {
      reason = "मंडी या जिले का नाम उपलब्ध नहीं है।";
    } else if (!mandi) {
      reason = "मंडी का मिलान नहीं हुआ। Alias mapping जाँचें।";
    } else if (!crop) {
      reason = "फसल का मिलान नहीं हुआ।";
    } else if (!date) {
      reason = "तारीख DD-MM-YYYY या YYYY-MM-DD में नहीं है।";
    } else if (min === null || modal === null || max === null) {
      reason = "न्यूनतम, मॉडल या अधिकतम मूल्य मान्य संख्या नहीं है।";
    } else if (!(min <= modal && modal <= max)) {
      reason = "मूल्य क्रम सही नहीं है: न्यूनतम ≤ मॉडल ≤ अधिकतम होना चाहिए।";
    } else if (!isSupportedUnit(raw.unit_name_price)) {
      reason = "मूल्य की इकाई रुपये प्रति क्विंटल नहीं है।";
    }

    const status = reason
      ? !mandi || !crop
        ? "unmatched"
        : "invalid"
      : "ready";

    return {
      index,
      marketName,
      districtName,
      commodityName,
      date,
      min: min ?? 0,
      modal: modal ?? 0,
      max: max ?? 0,
      variety,
      grade,
      mandiId: mandi?.id,
      cropId: crop?.id,
      status,
      reason: reason || undefined,
      raw,
    };
  });

  let paginationMessage = "Pagination जानकारी नहीं मिली; रिपोर्ट की पूर्णता सत्यापित नहीं की जा सकती।";

  if (paginationKnown && paginationComplete) {
    paginationMessage =
      "दिए गए JSON में pagination के अनुसार सभी पेज पूरे हैं। यह केवल चुनी गई रिपोर्ट/फिल्टर की पूर्णता बताता है।";
  } else if (paginationKnown) {
    paginationMessage =
      "रिपोर्ट में एक या अधिक पेज बाकी हैं। सभी पेजों का डेटा आयात करने से पहले पूरी रिपोर्ट अपलोड करें।";
  }

  return {
    rows,
    paginationKnown,
    paginationComplete,
    paginationMessage,
  };
}

function normalizeMarketDate(date: string): string {
  const value = date.trim();

  // Already YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value;
  }

  // Convert DD-MM-YYYY to YYYY-MM-DD
  const match = value.match(/^(\d{2})-(\d{2})-(\d{4})$/);

  if (match) {
    const [, day, month, year] = match;
    return `${year}-${month}-${day}`;
  }

  throw new Error(`Unsupported market date format: ${date}`);
}

function safeKey(value: string): string {
  return (
    normalize(value).replace(/\s+/g, "_").replace(/[^a-z0-9_-]/g, "") ||
    "unknown"
  );
}

function priceKey(value: number): string {
  return String(value).replace(/\./g, "_");
}

function historyKey(row: AgmarknetPreviewRow): string {
  return [
    "agmarknet",
    row.date,
    safeKey(row.variety),
    safeKey(row.grade),
    priceKey(row.min),
    priceKey(row.modal),
    priceKey(row.max),
  ].join("_");
}


function makePriceRecord(
  row: AgmarknetPreviewRow,
  updatedBy: string,
  updatedAt: number
) {
  const variety = [row.variety, row.grade]
    .filter(Boolean)
    .join(" / ");

  const record: Record<string, unknown> = {
    mandiId: row.mandiId!,
    cropId: row.cropId!,
    min: row.min,
    modal: row.modal,
    max: row.max,
    unit: "quintal",
    marketDate: row.date,
    updatedAt,
    updatedBy,
    source: "AGMARKNET",
    manualOverride: false,
    apiUpdatedAt: updatedAt,
    apiMarket: row.marketName,
    apiDistrict: row.districtName,
    apiCommodity: row.commodityName,
    apiVariety: row.variety,
    apiGrade: row.grade,
    apiState: "Bihar",
  };

  if (variety) {
    record.variety = variety;
  }

  return record;
}

export async function importAgmarknetRows(
  rows: AgmarknetPreviewRow[],
  updatedBy: string
): Promise<AgmarknetImportResult> {
  if (!updatedBy.trim()) {
    throw new Error("Logged-in user की पहचान नहीं मिली। दोबारा login करें।");
  }

  const readyRows = rows.filter(
    (row) =>
      row.status === "ready" &&
      row.mandiId &&
      row.cropId &&
      row.date
  );

  const result: AgmarknetImportResult = {
    historyWritten: 0,
    historyAlreadyExists: 0,
    currentUpdated: 0,
    currentSkipped: 0,
    unmatchedOrInvalid: rows.length - readyRows.length,
    errors: [],
  };

  if (readyRows.length === 0) return result;

  // Prevent duplicate rows within the same uploaded JSON.
  const uniqueRows = new Map<string, AgmarknetPreviewRow>();

  for (const row of readyRows) {
    const identity = `${row.mandiId}|${row.cropId}|${historyKey(row)}`;
    if (!uniqueRows.has(identity)) uniqueRows.set(identity, row);
  }

  const importRows = [...uniqueRows.values()];
  const rootUpdates: Record<string, unknown> = {};
  const currentGroups = new Map<string, AgmarknetPreviewRow[]>();
  const now = Date.now();

  // Preserve all unique historical records, including older dates.
  for (const row of importRows) {
    try {
      const hKey = historyKey(row);
      const historyPath =
        `mandiPriceHistory/${row.mandiId}/${row.cropId}/${hKey}`;

      const existingHistory = await get(ref(database, historyPath));

      if (existingHistory.exists()) {
        result.historyAlreadyExists++;
      } else {
        rootUpdates[historyPath] = {
          ...makePriceRecord(row, updatedBy, now),
          historyId: hKey,
        };
        result.historyWritten++;
      }

      const currentKey = `${row.mandiId}|${row.cropId}`;
      const group = currentGroups.get(currentKey) ?? [];
      group.push(row);
      currentGroups.set(currentKey, group);
    } catch (error) {
      result.errors.push(
        `${row.marketName} / ${row.commodityName}: ${
          error instanceof Error ? error.message : "पढ़ने में त्रुटि"
        }`
      );
    }
  }

  // Current price has only one record per mandi + crop. If a report contains
  // multiple different varieties/grades for the same mandi/crop/date, keep
  // their history but do not arbitrarily choose one as the current price.
  for (const [key, group] of currentGroups) {
    const [mandiId, cropId] = key.split("|");

    try {
      const latestDate = group.reduce(
        (latest, row) => (row.date > latest ? row.date : latest),
        ""
      );
      const latestRows = group.filter((row) => row.date === latestDate);

      const distinctLatest = new Map<string, AgmarknetPreviewRow>();
      for (const row of latestRows) {
        const identity = [
          row.variety,
          row.grade,
          row.min,
          row.modal,
          row.max,
        ].join("|");
        distinctLatest.set(identity, row);
      }

      if (distinctLatest.size !== 1) {
        result.currentSkipped++;
        continue;
      }

      const incoming = [...distinctLatest.values()][0];
      const currentPath = `mandiPrices/${mandiId}/${cropId}`;
      const currentSnapshot = await get(ref(database, currentPath));
      const current = currentSnapshot.exists()
        ? currentSnapshot.val()
        : null;

      const incomingDate = normalizeMarketDate(incoming.date);
	  const currentDate = current?.marketDate
	    ? normalizeMarketDate(String(current.marketDate))
	    : "";
	     
	  if (
	    current?.manualOverride === true &&
	    currentDate === incomingDate
	  ) {
	    result.currentSkipped++;
	    continue;
	  }

      if (
        current?.marketDate &&
        String(current.marketDate) > incoming.date
      ) {
        result.currentSkipped++;
        continue;
      }

      rootUpdates[currentPath] = makePriceRecord(incoming, updatedBy, now);
      result.currentUpdated++;
    } catch (error) {
      result.errors.push(
        `${mandiId}/${cropId}: ${
          error instanceof Error ? error.message : "current price त्रुटि"
        }`
      );
    }
  }

  if (Object.keys(rootUpdates).length > 0) {
    await update(ref(database), rootUpdates);
  }

  return result;
}