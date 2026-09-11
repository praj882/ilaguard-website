// src/app/api/weather/route.ts
export const dynamic = "force-dynamic";
export const revalidate = 0;
import { NextRequest, NextResponse } from "next/server";

// ============================================================
// GET /api/weather?latitude=25.86&longitude=85.78
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
    // Validate geographic ranges
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
    // Open-Meteo request
    // ----------------------------------------------------------

    const params = new URLSearchParams({
      latitude: latitude.toString(),
      longitude: longitude.toString(),

      current: [
        "temperature_2m",
        "apparent_temperature",
        "relative_humidity_2m",
        "precipitation",
        "rain",
        "weather_code",
        "wind_speed_10m",
      ].join(","),

      daily: [
        "temperature_2m_max",
        "temperature_2m_min",
        "precipitation_probability_max",
        "precipitation_sum",
        "rain_sum",
        "weather_code",
        "wind_speed_10m_max",
      ].join(","),

      timezone: "auto",
      forecast_days: "7",
    });

    const weatherUrl =
      `https://api.open-meteo.com/v1/forecast?${params.toString()}`;

    const response = await fetch(weatherUrl, {
      cache: "no-store",
    });

    // ----------------------------------------------------------
    // Open-Meteo error
    // ----------------------------------------------------------

    if (!response.ok) {
      console.error(
        "Open-Meteo API error:",
        response.status,
        response.statusText
      );

      return NextResponse.json(
        {
          success: false,
          error: "Weather service is currently unavailable.",
        },
        { status: 502 }
      );
    }

    const data = await response.json();

    // ----------------------------------------------------------
    // Return weather data
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
            "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error("Weather route error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to fetch weather data.",
      },
      { status: 500 }
    );
  }
}