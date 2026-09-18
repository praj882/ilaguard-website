// ============================================================
// data.gov.in Mandi API types
// ============================================================

export type DataGovMandiRecord = {
  state?: string;
  district?: string;
  market?: string;
  commodity?: string;
  variety?: string;
  grade?: string;

  arrival_date?: string;

  min_price?: number | string;
  max_price?: number | string;
  modal_price?: number | string;
};

export type DataGovMandiResponse = {
  index_name?: string;
  title?: string;

  total?: number | string;
  count?: number | string;
  limit?: number | string;
  offset?: number | string;

  records?: DataGovMandiRecord[];

  error?: string;
  errorMessage?: string;
  message?: string;
};