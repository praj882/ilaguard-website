// ============================================================
// IlaGuard Data.gov.in Mandi API
// Server-side only
// ============================================================

// ============================================================
// TYPES
// ============================================================

export type DataGovMandiRecord = {
  state?: string;
  district?: string;
  market?: string;
  commodity?: string;
  variety?: string;
  grade?: string;
  arrival_date?: string;

  min_price?: string | number;
  max_price?: string | number;
  modal_price?: string | number;

  // Some data.gov.in responses may use capitalized fields
  State?: string;
  District?: string;
  Market?: string;
  Commodity?: string;
  Variety?: string;
  Grade?: string;
  Arrival_Date?: string;

  Min_Price?: string | number;
  Max_Price?: string | number;
  Modal_Price?: string | number;

  [key: string]: unknown;
};

// ============================================================
// NORMALIZED RECORD
// ============================================================

export type NormalizedDataGovMandiRecord = {
  state?: string;
  district?: string;
  market?: string;
  commodity?: string;
  variety?: string;
  grade?: string;

  arrivalDate?: string;

  minPrice?: string | number;
  maxPrice?: string | number;
  modalPrice?: string | number;
};

// ============================================================
// RESPONSE
// ============================================================

export type DataGovResponse = {
  records?: DataGovMandiRecord[];

  total?: number;

  count?: number;

  limit?: number | string;

  offset?: number | string;
};

// ============================================================
// CONFIG
// ============================================================

function getDataGovConfig() {
  const apiKey =
    process.env.DATA_GOV_IN_API_KEY;

  const resourceId =
    process.env.DATA_GOV_IN_MANDI_RESOURCE_ID;

  if (!apiKey) {
    throw new Error(
      "Missing DATA_GOV_IN_API_KEY"
    );
  }

  if (!resourceId) {
    throw new Error(
      "Missing DATA_GOV_IN_MANDI_RESOURCE_ID"
    );
  }

  return {
    apiKey,
    resourceId,
  };
}

// ============================================================
// NORMALIZE API RECORD
// ============================================================

export function normalizeDataGovMandiRecord(
  record: DataGovMandiRecord
): NormalizedDataGovMandiRecord {

  return {
    // --------------------------------------------------------
    // Location
    // --------------------------------------------------------

    state:
      record.state ??
      record.State,

    district:
      record.district ??
      record.District,

    market:
      record.market ??
      record.Market,

    // --------------------------------------------------------
    // Commodity
    // --------------------------------------------------------

    commodity:
      record.commodity ??
      record.Commodity,

    variety:
      record.variety ??
      record.Variety,

    grade:
      record.grade ??
      record.Grade,

    // --------------------------------------------------------
    // Date
    // --------------------------------------------------------

    arrivalDate:
      record.arrival_date ??
      record.Arrival_Date,

    // --------------------------------------------------------
    // Prices
    // --------------------------------------------------------

    minPrice:
      record.min_price ??
      record.Min_Price,

    maxPrice:
      record.max_price ??
      record.Max_Price,

    modalPrice:
      record.modal_price ??
      record.Modal_Price,
  };
}

// ============================================================
// FETCH ONE PAGE
// ============================================================

export async function fetchMandiPage(
  offset = 0,
  limit = 1000
): Promise<DataGovResponse> {

  const {
    apiKey,
    resourceId,
  } = getDataGovConfig();

  const url =
    new URL(
      `https://api.data.gov.in/resource/${resourceId}`
    );

  url.searchParams.set(
    "api-key",
    apiKey
  );

  url.searchParams.set(
    "format",
    "json"
  );

  url.searchParams.set(
    "limit",
    String(limit)
  );

  url.searchParams.set(
    "offset",
    String(offset)
  );

  // ==========================================================
  // Optional state filter
  // ==========================================================

  const state =
    process.env.MANDI_SYNC_STATE;

  if (state) {
    url.searchParams.set(
      "filters[state]",
      state
    );
  }

  console.log(
    `[Mandi API] Fetching offset=${offset}, limit=${limit}`
  );

  const response =
    await fetch(
      url.toString(),
      {
        method: "GET",
        cache: "no-store",
      }
    );

  if (!response.ok) {

    const body =
      await response.text();

    if (
      response.status === 401
    ) {
      throw new Error(
        "data.gov.in API authentication failed. Check DATA_GOV_IN_API_KEY."
      );
    }

    throw new Error(
      `data.gov.in API failed: ${response.status} ${body}`
    );
  }

  const data =
    (await response.json()) as DataGovResponse;

  return data;
}

// ============================================================
// FETCH ALL RECORDS
// ============================================================

export async function fetchAllMandiRecords(): Promise<
  DataGovMandiRecord[]
> {

  const configuredLimit =
    Number(
      process.env.MANDI_SYNC_LIMIT ||
      "1000"
    );

  const limit =
    Number.isFinite(
      configuredLimit
    ) &&
    configuredLimit > 0
      ? Math.min(
          configuredLimit,
          1000
        )
      : 1000;

  const allRecords:
    DataGovMandiRecord[] = [];

  let offset = 0;

  let total:
    number | null = null;

  while (true) {

    const data =
      await fetchMandiPage(
        offset,
        limit
      );

    const records =
      Array.isArray(
        data.records
      )
        ? data.records
        : [];

    allRecords.push(
      ...records
    );

    if (
      typeof data.total ===
      "number"
    ) {
      total =
        data.total;
    }

    console.log(
      `[Mandi API] Received ${records.length} records. Total collected: ${allRecords.length}${total !== null ? ` / ${total}` : ""}`
    );

    // --------------------------------------------------------
    // No records
    // --------------------------------------------------------

    if (
      records.length === 0
    ) {
      break;
    }

    // --------------------------------------------------------
    // Everything received
    // --------------------------------------------------------

    if (
      total !== null &&
      allRecords.length >= total
    ) {
      break;
    }

    // --------------------------------------------------------
    // Last page
    // --------------------------------------------------------

    if (
      records.length < limit
    ) {
      break;
    }

    offset += limit;

    // --------------------------------------------------------
    // Safety limit
    // --------------------------------------------------------

    if (
      offset >= 100000
    ) {

      console.warn(
        "[Mandi API] Safety limit reached at offset 100000."
      );

      break;
    }
  }

  return allRecords;
}