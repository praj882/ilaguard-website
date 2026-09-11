import type { WeatherData } from "@/lib/weatherService";

// ============================================================
// FORECAST
// ============================================================

export default function WeatherForecast({
  weather,
}: {
  weather: WeatherData;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-900">
          अगले 7 दिन का मौसम
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          बारिश और तापमान का पूर्वानुमान
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">

        {weather.daily.map((day) => {
          const description =
            getWeatherDescription(
              day.weatherCode
            );

          return (
            <div
              key={day.date}
              className="rounded-xl border border-slate-200 p-4"
            >

              <p className="text-sm font-semibold text-slate-700">
                {formatDate(
				  day.date,
				  weather.timezone
				)}
              </p>

              <div className="my-3 text-3xl">
                {description.icon}
              </div>

              <p className="text-xs text-slate-500">
                {description.label}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-bold text-slate-900">
                  {Math.round(day.maxTemperature)}°
                </span>

                <span className="text-sm text-slate-500">
                  {Math.round(day.minTemperature)}°
                </span>
              </div>

              <div className="mt-3 border-t border-slate-100 pt-3">

                <p className="text-xs text-slate-500">
                  🌧️ बारिश की संभावना
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  {Math.round(
                    day.precipitationProbability
                  )}
                  %
                </p>

              </div>

              <p className="mt-2 text-xs text-slate-500">
                वर्षा: {day.precipitation.toFixed(1)} mm
              </p>

            </div>
          );
        })}

      </div>
    </section>
  );
}

// ============================================================
// DATE FORMAT
// ============================================================

function formatDate(
  date: string,
  timezone: string
) {
  try {
    return new Intl.DateTimeFormat(
      "hi-IN",
      {
        weekday: "short",
        day: "numeric",
        month: "short",
        timeZone: timezone,
      }
    ).format(
      new Date(`${date}T12:00:00Z`)
    );
  } catch {
    return date;
  }
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
