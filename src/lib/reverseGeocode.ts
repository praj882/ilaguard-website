// src/lib/reverseGeocode.ts

// ============================================================
// TYPES
// ============================================================

export type ReverseGeocodeResult = {
  displayName: string;

  city: string | null;
  district: string | null;
  state: string | null;
  country: string | null;

  latitude: number;
  longitude: number;
};

// ============================================================
// NOMINATIM RESPONSE
// ============================================================

type NominatimResponse = {
  display_name?: string;

  lat?: string;
  lon?: string;

  address?: {
    city?: string;
    town?: string;
    village?: string;
    municipality?: string;

    county?: string;
    district?: string;

    state?: string;
    state_district?: string;

    country?: string;
  };
};

// ============================================================
// REVERSE GEOCODING
// ============================================================

export async function reverseGeocode(
  latitude: number,
  longitude: number
): Promise<ReverseGeocodeResult> {
  if (
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ) {
    throw new Error("Invalid latitude or longitude.");
  }

  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
  });

  const response = await fetch(
    `/api/geocode?${params.toString()}`
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);

    throw new Error(
      errorData?.error ||
        "Unable to determine your location."
    );
  }

  const result = await response.json();

  if (!result.success || !result.data) {
    throw new Error(
      result.error ||
        "Unable to determine your location."
    );
  }

  const data = result.data as NominatimResponse;

  const address = data.address ?? {};

  const city =
    address.city ??
    address.town ??
    address.village ??
    address.municipality ??
    null;

  const district =
    address.district ??
    address.county ??
    address.state_district ??
    null;

  const state =
    address.state ??
    null;

  const country =
    address.country ??
    null;

  return {
    displayName:
      data.display_name ??
      "Unknown location",

    city,
    district,
    state,
    country,

    latitude,
    longitude,
  };
}