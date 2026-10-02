"use client";

import { useEffect, useMemo, useState } from "react";

import {
  getMandiPriceHistory,
  type MandiPriceHistory,
} from "@/lib/mandiPriceService";

type CropPriceChartProps = {
  mandiId: string;
  cropId: string;
};

type Period = "7days" | "1month";

export default function CropPriceChart({
  mandiId,
  cropId,
}: CropPriceChartProps) {
  const [history, setHistory] = useState<MandiPriceHistory[]>([]);
  const [period, setPeriod] = useState<Period>("7days");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!mandiId || !cropId) {
      setHistory([]);
      return;
    }

    let cancelled = false;

    const loadHistory = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await getMandiPriceHistory(mandiId, cropId);

        if (!cancelled) {
          setHistory(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load mandi price history:", err);

        if (!cancelled) {
          setHistory([]);
          setError(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadHistory();

    return () => {
      cancelled = true;
    };
  }, [mandiId, cropId]);

  /*
   * Keep only the latest history record for each market date.
   *
   * Multiple updates can exist for the same date, so showing all of them
   * would be confusing for farmers.
   */
  const dailyHistory = useMemo(() => {
    const byDate = new Map<string, MandiPriceHistory>();

    for (const item of history) {
      if (!item.marketDate) continue;

      const existing = byDate.get(item.marketDate);

      if (!existing) {
        byDate.set(item.marketDate, item);
        continue;
      }

      const existingUpdatedAt = Number(existing.updatedAt ?? 0);
      const currentUpdatedAt = Number(item.updatedAt ?? 0);

      if (currentUpdatedAt >= existingUpdatedAt) {
        byDate.set(item.marketDate, item);
      }
    }

    return Array.from(byDate.values())
      .filter(
        (item) =>
          Number.isFinite(Number(item.min)) &&
          Number.isFinite(Number(item.modal)) &&
          Number.isFinite(Number(item.max))
      )
      .sort((a, b) =>
        String(b.marketDate).localeCompare(String(a.marketDate))
      );
  }, [history]);

  /*
   * Filter records according to the selected period.
   */
  const filteredHistory = useMemo(() => {
    const days = period === "7days" ? 7 : 30;

    const today = new Date();

    today.setHours(23, 59, 59, 999);

    const startDate = new Date(today);

    startDate.setDate(startDate.getDate() - (days - 1));

    startDate.setHours(0, 0, 0, 0);

    return dailyHistory.filter((item) => {
      const date = new Date(`${item.marketDate}T00:00:00`);

      return date >= startDate && date <= today;
    });
  }, [dailyHistory, period]);

  const formatDate = (dateString: string) => {
    if (!dateString) return "-";

    const parts = dateString.split("-");

    if (parts.length !== 3) {
      return dateString;
    }

    const [year, month, day] = parts;

    return `${day}-${month}-${year}`;
  };

  const formatPrice = (value: number | undefined) => {
    if (value === undefined || !Number.isFinite(Number(value))) {
      return "-";
    }

    return `₹${Number(value).toLocaleString("en-IN")}`;
  };

  if (!mandiId || !cropId) {
    return null;
  }

  return (
    <section className="mt-6 rounded-2xl bg-white p-4 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
          📊 पिछले मंडी भाव
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          चुनी गई अवधि के मंडी भाव देखें
        </p>
      </div>

      {/* Period Selection */}
      <div className="mb-5 grid grid-cols-2 gap-2 rounded-xl bg-gray-100 p-1">
        <button
          type="button"
          onClick={() => setPeriod("7days")}
          className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
            period === "7days"
              ? "bg-white text-green-700 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          पिछले 7 दिन
        </button>

        <button
          type="button"
          onClick={() => setPeriod("1month")}
          className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
            period === "1month"
              ? "bg-white text-green-700 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          पिछला 1 महीना
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="rounded-xl bg-gray-50 px-4 py-6 text-center text-sm text-gray-600">
          भाव का रिकॉर्ड लोड हो रहा है...
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="rounded-xl bg-gray-50 px-4 py-6 text-center text-sm text-gray-600">
          भाव का पुराना रिकॉर्ड अभी उपलब्ध नहीं है।
        </div>
      )}

      {/* No data */}
      {!loading && !error && filteredHistory.length === 0 && (
        <div className="rounded-xl bg-gray-50 px-4 py-6 text-center text-sm text-gray-600">
          इस अवधि के लिए भाव का रिकॉर्ड उपलब्ध नहीं है।
        </div>
      )}

      {/* Table */}
      {!loading && !error && filteredHistory.length > 0 && (
        <>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-3 py-3 text-left font-semibold text-gray-700">
                    तारीख
                  </th>

                  <th className="px-3 py-3 text-right font-semibold text-gray-700">
                    न्यूनतम
                  </th>

                  <th className="px-3 py-3 text-right font-semibold text-gray-700">
                    सामान्य
                  </th>

                  <th className="px-3 py-3 text-right font-semibold text-gray-700">
                    अधिकतम
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredHistory.map((item, index) => (
                  <tr
                    key={`${item.marketDate}-${index}`}
                    className={`border-b border-gray-100 last:border-0 ${
                      index === 0 ? "bg-green-50" : ""
                    }`}
                  >
                    <td className="px-3 py-3 font-medium text-gray-800">
                      <div className="flex items-center gap-2">
                        <span>{formatDate(item.marketDate)}</span>

                        {index === 0 && (
                          <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                            नवीनतम
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="px-3 py-3 text-right text-gray-700">
                      {formatPrice(Number(item.min))}
                    </td>

                    <td className="px-3 py-3 text-right font-semibold text-gray-900">
                      {formatPrice(Number(item.modal))}
                    </td>

                    <td className="px-3 py-3 text-right text-gray-700">
                      {formatPrice(Number(item.max))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Unit */}
          <div className="mt-4 text-xs text-gray-500">
            भाव की इकाई: ₹/क्विंटल
          </div>

          {/* Information */}
          <div className="mt-3 rounded-xl bg-gray-50 px-3 py-3 text-xs leading-5 text-gray-600">
            <strong className="text-gray-700">ध्यान दें:</strong>{" "}
            एक ही तारीख में कई बार भाव अपडेट होने पर उस तारीख का सबसे नया
            रिकॉर्ड दिखाया गया है।
          </div>
        </>
      )}
    </section>
  );
}