// src/lib/weatherService.ts

// ============================================================
// TYPES
// ============================================================

export type CurrentWeather = {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  precipitation: number;
  rain: number;
  weatherCode: number;
  windSpeed: number;
};

export type DailyWeather = {
  date: string;
  minTemperature: number;
  maxTemperature: number;
  precipitationProbability: number;
  precipitation: number;
  rain: number;
  weatherCode: number;
  windSpeed: number;
};

export type WeatherData = {
  latitude: number;
  longitude: number;
  timezone: string;

  current: CurrentWeather;

  daily: DailyWeather[];
};

// ============================================================
// OPEN-METEO RESPONSE TYPE
// ============================================================

type OpenMeteoResponse = {
  latitude: number;
  longitude: number;
  timezone: string;

  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    precipitation: number;
    rain: number;
    weather_code: number;
    wind_speed_10m: number;
  };

  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
    precipitation_sum: number[];
    rain_sum: number[];
    weather_code: number[];
    wind_speed_10m_max: number[];
  };
};

// ============================================================
// WEATHER SERVICE
// ============================================================

export async function getWeather(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
  });

  const response = await fetch(
	`/api/weather?latitude=${latitude}&longitude=${longitude}`,
	{
		cache: "no-store",
	}
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);

    throw new Error(
      errorData?.error ||
        "Unable to fetch weather data."
    );
  }

  const result = await response.json();

  if (!result.success || !result.data) {
    throw new Error(
      result.error || "Invalid weather response."
    );
  }

  const data =
    result.data as OpenMeteoResponse;

  return {
    latitude: data.latitude,
    longitude: data.longitude,
    timezone: data.timezone,

    current: {
      temperature: data.current.temperature_2m,
      apparentTemperature:
        data.current.apparent_temperature,
      humidity:
        data.current.relative_humidity_2m,
      precipitation:
        data.current.precipitation,
      rain:
        data.current.rain,
      weatherCode:
        data.current.weather_code,
      windSpeed:
        data.current.wind_speed_10m,
    },

    daily: data.daily.time.map((date, index) => ({
      date,

      minTemperature:
        data.daily.temperature_2m_min[index],

      maxTemperature:
        data.daily.temperature_2m_max[index],

      precipitationProbability:
        data.daily
          .precipitation_probability_max[index],

      precipitation:
        data.daily.precipitation_sum[index],

      rain:
        data.daily.rain_sum[index],

      weatherCode:
        data.daily.weather_code[index],

      windSpeed:
        data.daily.wind_speed_10m_max[index],
    })),
  };
}