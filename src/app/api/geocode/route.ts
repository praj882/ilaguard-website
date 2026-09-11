// src/app/api/geocode/route.ts

import { NextRequest, NextResponse } from "next/server";

// ============================================================
// GET /api/geocode?latitude=25.8629&longitude=85.7810
// ============================================================

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const latitudeParam = searchParams.get("latitude");
    const longitudeParam = searchParams.get("longitude");

    // ----------------------------------------------------------
    // Validate parameters
    // ----------------------------------------------------------

    if (!latitudeParam || !longitudeParam) {
      return NextResponse.json(
        {
          success: false,
          error: "Latitude and longitude are required.",
        },
        { status: 400 }
      );
    }

    const latitude = Number(latitudeParam);
    const longitude = Number(longitudeParam);

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid latitude or longitude.",
        },
        { status: 400 }
      );
    }

    // ----------------------------------------------------------
    // Validate coordinate ranges
    // ----------------------------------------------------------

    if (latitude < -90 || latitude > 90) {
      return NextResponse.json(
        {
          success: false,
          error: "Latitude must be between -90 and 90.",
        },
        { status: 400 }
      );
    }

    if (longitude < -180 || longitude > 180) {
      return NextResponse.json(
        {
          success: false,
          error: "Longitude must be between -180 and 180.",
        },
        { status: 400 }
      );
    }

    // ----------------------------------------------------------
    // Nominatim request
    // ----------------------------------------------------------

    const params = new URLSearchParams({
      lat: latitude.toString(),
      lon: longitude.toString(),
      format: "jsonv2",
      addressdetails: "1",
      zoom: "10",
      "accept-language": "en",
    });

    const nominatimUrl =
      `https://nominatim.openstreetmap.org/reverse?${params.toString()}`;

    const response = await fetch(nominatimUrl, {
      method: "GET",
      headers: {
        // Identify your application when using Nominatim.
        "User-Agent":
          "IlaGuard Labs Weather Forecast/1.0 (https://www.ilaguard.com)",
        Accept: "application/json",
      },

      // Reverse geocoding does not need to be called constantly.
      next: {
        revalidate: 3600,
      },
    });

    // ----------------------------------------------------------
    // Nominatim error
    // ----------------------------------------------------------

    if (!response.ok) {
      console.error(
        "Nominatim API error:",
        response.status,
        response.statusText
      );

      return NextResponse.json(
        {
          success: false,
          error: "Unable to determine your location.",
        },
        { status: 502 }
      );
    }

    const data = await response.json();

    // ----------------------------------------------------------
    // Return response
    // ----------------------------------------------------------

    return NextResponse.json(
      {
        success: true,
        data,
      },
      {
        status: 200,

        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    );
  } catch (error) {
    console.error("Geocoding route error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to determine your location.",
      },
      { status: 500 }
    );
  }
}