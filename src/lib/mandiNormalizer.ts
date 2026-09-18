// src/lib/mandiNormalizer.ts

// ============================================================
// IlaGuard - Mandi normalization helpers
// ============================================================

// ============================================================
// NORMALIZE TEXT
// ============================================================
//
// Examples:
//
// "Dalsinghsarai "
//     ↓
// "dalsinghsarai"
//
// "Dalsinghsarai APMC"
//     ↓
// "dalsinghsarai apmc"
//
// ============================================================

export function normalizeText(
  value?: string
): string {
  return String(
    value ?? ""
  )
    .trim()
    .toLowerCase()
    .replace(
      /\s+/g,
      " "
    );
}

// ============================================================
// PARSE PRICE
// ============================================================
//
// Supports:
//
// 1500
// "1500"
// "1,500"
// "1500.50"
//
// ============================================================

export function parsePrice(
  value?: string | number
): number | null {
  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return null;
  }

  const cleaned =
    String(value)
      .replace(
        /,/g,
        ""
      )
      .trim();

  if (!cleaned) {
    return null;
  }

  const parsed =
    Number(cleaned);

  if (
    !Number.isFinite(parsed)
  ) {
    return null;
  }

  return parsed;
}

// ============================================================
// NORMALIZE MARKET DATE
// ============================================================
//
// Supported:
//
// 16/09/2026
// 16-09-2026
// 2026-09-16
//
// Returns:
//
// 2026-09-16
//
// ============================================================

export function normalizeMarketDate(
  value?: string
): string | null {
  if (!value) {
    return null;
  }

  const trimmed =
    value.trim();

  // ----------------------------------------------------------
  // YYYY-MM-DD
  // ----------------------------------------------------------

  if (
    /^\d{4}-\d{2}-\d{2}$/.test(
      trimmed
    )
  ) {
    return trimmed;
  }

  // ----------------------------------------------------------
  // DD/MM/YYYY
  // ----------------------------------------------------------

  const slashMatch =
    trimmed.match(
      /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
    );

  if (slashMatch) {
    const [
      ,
      day,
      month,
      year,
    ] = slashMatch;

    return [
      year,
      month.padStart(
        2,
        "0"
      ),
      day.padStart(
        2,
        "0"
      ),
    ].join("-");
  }

  // ----------------------------------------------------------
  // DD-MM-YYYY
  // ----------------------------------------------------------

  const dashMatch =
    trimmed.match(
      /^(\d{1,2})-(\d{1,2})-(\d{4})$/
    );

  if (dashMatch) {
    const [
      ,
      day,
      month,
      year,
    ] = dashMatch;

    return [
      year,
      month.padStart(
        2,
        "0"
      ),
      day.padStart(
        2,
        "0"
      ),
    ].join("-");
  }

  return null;
}