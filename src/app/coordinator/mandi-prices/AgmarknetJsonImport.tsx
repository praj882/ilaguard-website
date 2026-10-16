"use client";

import { useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import {
  importAgmarknetRows,
  previewAgmarknetJson,
  type AgmarknetImportResult,
  type AgmarknetPreview,
} from "@/lib/agmarknetJsonImporter";

export default function AgmarknetJsonImport() {
  const [user, setUser] = useState<User | null>(null);
  const [preview, setPreview] = useState<AgmarknetPreview | null>(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [loadingFile, setLoadingFile] = useState(false);
  const [importing, setImporting] = useState(false);
  const [allowIncomplete, setAllowIncomplete] = useState(false);
  const [result, setResult] = useState<AgmarknetImportResult | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  const readyCount = useMemo(
    () => preview?.rows.filter((row) => row.status === "ready").length ?? 0,
    [preview]
  );

  const unmatchedCount = useMemo(
    () =>
      preview?.rows.filter((row) => row.status === "unmatched").length ?? 0,
    [preview]
  );

  const invalidCount = useMemo(
    () => preview?.rows.filter((row) => row.status === "invalid").length ?? 0,
    [preview]
  );

  const paginationConfirmed =
    !!preview &&
    ((preview.paginationKnown && preview.paginationComplete) ||
      allowIncomplete);

  async function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoadingFile(true);
    setError("");
    setResult(null);
    setPreview(null);
    setAllowIncomplete(false);
    setFileName(file.name);

    try {
      const contents = await file.text();
      const json: unknown = JSON.parse(contents);
      const nextPreview = previewAgmarknetJson(json);
      setPreview(nextPreview);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "JSON फ़ाइल पढ़ी नहीं जा सकी।"
      );
    } finally {
      setLoadingFile(false);
      // Allows the same file to be selected again after correcting it.
      event.target.value = "";
    }
  }

  async function handleImport() {
    if (!preview || importing) return;

    if (!user?.uid) {
      setError("आपका login सत्यापित नहीं हुआ। कृपया दोबारा login करें।");
      return;
    }

    if (!paginationConfirmed) {
      setError(
        "Import से पहले pagination की पुष्टि करें या पूरी रिपोर्ट अपलोड करें।"
      );
      return;
    }

    if (readyCount === 0) {
      setError("Import के लिए कोई मान्य और matched रिकॉर्ड नहीं है।");
      return;
    }

    const confirmed = window.confirm(
      `${readyCount} matched रिकॉर्ड import किए जाएंगे। पुराने रिकॉर्ड current price को replace नहीं करेंगे और manual override सुरक्षित रहेगा। आगे बढ़ें?`
    );

    if (!confirmed) return;

    setImporting(true);
    setError("");
    setResult(null);

    try {
      const importResult = await importAgmarknetRows(
        preview.rows,
        user.uid
      );
      setResult(importResult);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Import विफल हुआ। Firebase rules और network जाँचें।"
      );
    } finally {
      setImporting(false);
    }
  }

  return (
    <section className="mt-8 rounded-xl border border-emerald-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">
          AGMARKNET JSON Import
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          AGMARKNET से डाउनलोड की गई JSON रिपोर्ट को preview करके अलग से
          import करें। आपका मौजूदा manual price form इससे नहीं बदलेगा।
        </p>
      </div>

      <div className="rounded-lg bg-emerald-50 p-4">
        <label
          htmlFor="agmarknet-json-file"
          className="mb-2 block text-sm font-semibold text-gray-800"
        >
          AGMARKNET JSON फ़ाइल चुनें
        </label>

        <input
          id="agmarknet-json-file"
          type="file"
          accept=".json,application/json"
          onChange={handleFileChange}
          disabled={loadingFile || importing}
          className="block w-full text-sm text-gray-700 file:mr-3 file:rounded-md file:border-0 file:bg-emerald-700 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-emerald-800"
        />

        {fileName && (
          <p className="mt-2 break-all text-xs text-gray-600">
            चुनी गई फ़ाइल: {fileName}
          </p>
        )}

        {loadingFile && (
          <p className="mt-3 text-sm text-gray-700">JSON जाँची जा रही है…</p>
        )}
      </div>

      {error && (
        <div
          role="alert"
          className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
        >
          {error}
        </div>
      )}

      {preview && (
        <>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-lg border p-3">
              <p className="text-xs text-gray-500">कुल रिकॉर्ड</p>
              <p className="mt-1 text-xl font-bold">{preview.rows.length}</p>
            </div>

            <div className="rounded-lg border border-emerald-200 p-3">
              <p className="text-xs text-gray-500">Import के लिए तैयार</p>
              <p className="mt-1 text-xl font-bold text-emerald-700">
                {readyCount}
              </p>
            </div>

            <div className="rounded-lg border border-amber-200 p-3">
              <p className="text-xs text-gray-500">मंडी/फसल unmatched</p>
              <p className="mt-1 text-xl font-bold text-amber-700">
                {unmatchedCount}
              </p>
            </div>

            <div className="rounded-lg border border-red-200 p-3">
              <p className="text-xs text-gray-500">अमान्य रिकॉर्ड</p>
              <p className="mt-1 text-xl font-bold text-red-700">
                {invalidCount}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-900">
            {preview.paginationMessage}
          </div>

          {(!preview.paginationKnown || !preview.paginationComplete) && (
            <label className="mt-3 flex cursor-pointer items-start gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={allowIncomplete}
                onChange={(event) => setAllowIncomplete(event.target.checked)}
                className="mt-1"
              />
              <span>
                मैं पुष्टि करता/करती हूँ कि यह आंशिक या pagination-अज्ञात
                रिपोर्ट हो सकती है। मैं केवल इस फ़ाइल में मौजूद रिकॉर्ड
                import करना चाहता/चाहती हूँ।
              </span>
            </label>
          )}

          <div className="mt-4 overflow-x-auto rounded-lg border">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-600">
                <tr>
                  <th className="px-3 py-3">स्थिति</th>
                  <th className="px-3 py-3">मंडी / जिला</th>
                  <th className="px-3 py-3">फसल / किस्म</th>
                  <th className="px-3 py-3">तारीख</th>
                  <th className="px-3 py-3">न्यूनतम</th>
                  <th className="px-3 py-3">मॉडल</th>
                  <th className="px-3 py-3">अधिकतम</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {preview.rows.slice(0, 50).map((row) => (
                  <tr key={`${row.index}-${row.marketName}-${row.commodityName}`}>
                    <td className="px-3 py-3 align-top">
                      <span
                        className={
                          row.status === "ready"
                            ? "font-semibold text-emerald-700"
                            : row.status === "unmatched"
                              ? "font-semibold text-amber-700"
                              : "font-semibold text-red-700"
                        }
                      >
                        {row.status === "ready"
                          ? "Ready"
                          : row.status === "unmatched"
                            ? "Unmatched"
                            : "Invalid"}
                      </span>
                      {row.reason && (
                        <p className="mt-1 min-w-40 text-xs text-gray-500">
                          {row.reason}
                        </p>
                      )}
                    </td>

                    <td className="px-3 py-3 align-top">
                      <div className="min-w-32 font-medium">
                        {row.marketName || "—"}
                      </div>
                      <div className="text-xs text-gray-500">
                        {row.districtName}
                      </div>
                    </td>

                    <td className="px-3 py-3 align-top">
                      <div className="min-w-32">{row.commodityName || "—"}</div>
                      <div className="text-xs text-gray-500">
                        {[row.variety, row.grade].filter(Boolean).join(" / ")}
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-3">
                      {row.date || "—"}
                    </td>
                    <td className="px-3 py-3">{row.min}</td>
                    <td className="px-3 py-3">{row.modal}</td>
                    <td className="px-3 py-3">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {preview.rows.length > 50 && (
            <p className="mt-2 text-xs text-gray-500">
              Preview में पहले 50 रिकॉर्ड दिखाए गए हैं। Import सभी matched
              रिकॉर्ड पर लागू होगा।
            </p>
          )}

          <button
            type="button"
            onClick={handleImport}
            disabled={
              importing ||
              loadingFile ||
              !user?.uid ||
              readyCount === 0 ||
              !paginationConfirmed
            }
            className="mt-4 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {importing
              ? "Import हो रहा है…"
              : `Import ${readyCount} matched records`}
          </button>

          {!user?.uid && (
            <p className="mt-2 text-xs text-amber-700">
              Firebase login सत्यापित होने के बाद import उपलब्ध होगा।
            </p>
          )}
        </>
      )}

      {result && (
        <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <h3 className="font-bold text-emerald-900">Import पूरा हुआ</h3>
          <ul className="mt-2 space-y-1 text-sm text-gray-800">
            <li>नई history entries: {result.historyWritten}</li>
            <li>पहले से मौजूद history entries: {result.historyAlreadyExists}</li>
            <li>Current price अपडेट: {result.currentUpdated}</li>
            <li>Current price छोड़े गए: {result.currentSkipped}</li>
            <li>Unmatched/invalid रिकॉर्ड: {result.unmatchedOrInvalid}</li>
            <li>Errors: {result.errors.length}</li>
          </ul>

          {result.currentSkipped > 0 && (
            <p className="mt-2 text-xs text-gray-600">
              Current price कुछ रिकॉर्डों के लिए नहीं बदला गया—उदाहरण के
              लिए manual override, पुरानी तारीख, या एक ही दिन में कई
              varieties/grades होने पर।
            </p>
          )}

          {result.errors.length > 0 && (
            <details className="mt-3">
              <summary className="cursor-pointer text-sm font-semibold text-red-700">
                Import errors देखें
              </summary>
              <ul className="mt-2 list-inside list-disc space-y-1 text-xs text-red-700">
                {result.errors.slice(0, 20).map((message, index) => (
                  <li key={`${index}-${message}`}>{message}</li>
                ))}
              </ul>
            </details>
          )}
        </div>
      )}
    </section>
  );
}