// ============================================================
// CURRENT WEATHER CARD
// ============================================================

import type { WeatherData } from "@/lib/weatherService";

export default function CurrentWeather({
  weather,
}: {
  weather: WeatherData;
}) {
  const weatherDescription =
    getWeatherDescription(
      weather.current.weatherCode
    );

  return (
    <section className="rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 p-6 text-white shadow-lg">

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-sm text-white/80">
            अभी का मौसम
          </p>

          <div className="mt-2 flex items-center gap-4">

            <span className="text-6xl">
              {weatherDescription.icon}
            </span>

            <div>
              <div className="text-5xl font-bold">
                {Math.round(
                  weather.current.temperature
                )}
                °C
              </div>

              <p className="mt-1 text-white/90">
                {weatherDescription.label}
              </p>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">

          <WeatherStat
            label="महसूस हो रहा"
            value={`${Math.round(
              weather.current.apparentTemperature
            )}°C`}
          />

          <WeatherStat
            label="नमी"
            value={`${Math.round(
              weather.current.humidity
            )}%`}
          />

          <WeatherStat
            label="बारिश"
            value={`${weather.current.rain.toFixed(
              1
            )} mm`}
          />

          <WeatherStat
            label="हवा"
            value={`${Math.round(
              weather.current.windSpeed
            )} km/h`}
          />

        </div>

      </div>

    </section>
  );
}

// ============================================================
// WEATHER STAT
// ============================================================

function WeatherStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">

      <p className="text-xs text-white/70">
        {label}
      </p>

      <p className="mt-1 font-semibold">
        {value}
      </p>

    </div>
  );
}

// ============================================================
// WEATHER CODE
// ============================================================

function getWeatherDescription(
  code: number
) {
  if (code === 0) {
    return {
      icon: "☀️",
      label: "साफ आसमान",
    };
  }

  if (code === 1 || code === 2) {
    return {
      icon: "🌤️",
      label: "आंशिक बादल",
    };
  }

  if (code === 3) {
    return {
      icon: "☁️",
      label: "बादल",
    };
  }

  if (
    code === 45 ||
    code === 48
  ) {
    return {
      icon: "🌫️",
      label: "कोहरा",
    };
  }

  if (
    code >= 51 &&
    code <= 57
  ) {
    return {
      icon: "🌦️",
      label: "हल्की बूंदाबांदी",
    };
  }

  if (
    code >= 61 &&
    code <= 67
  ) {
    return {
      icon: "🌧️",
      label: "बारिश",
    };
  }

  if (
    code >= 71 &&
    code <= 77
  ) {
    return {
      icon: "🌨️",
      label: "बर्फबारी",
    };
  }

  if (
    code >= 80 &&
    code <= 82
  ) {
    return {
      icon: "🌦️",
      label: "बारिश की बौछार",
    };
  }

  if (
    code >= 95 &&
    code <= 99
  ) {
    return {
      icon: "⛈️",
      label: "गरज के साथ बारिश",
    };
  }

  return {
    icon: "🌤️",
    label: "मौसम",
  };
}