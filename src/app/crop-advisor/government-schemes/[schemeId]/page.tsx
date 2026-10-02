import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getAllGovernmentSchemes,
  getGovernmentSchemeById,
} from "@/lib/governmentSchemeService";

type PageProps = {
  params: Promise<{
    schemeId: string;
  }>;
};

/*
|--------------------------------------------------------------------------
| Static generation
|--------------------------------------------------------------------------
|
| Next.js can generate known scheme pages from the local dataset.
|
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return getAllGovernmentSchemes().map(
    (scheme) => ({
      schemeId: scheme.id,
    })
  );
}

/*
|--------------------------------------------------------------------------
| Metadata
|--------------------------------------------------------------------------
*/

export async function generateMetadata({
  params,
}: PageProps) {
  const { schemeId } = await params;

  const scheme =
    getGovernmentSchemeById(schemeId);

  if (!scheme) {
    return {
      title: "योजना नहीं मिली | IlaGuard Labs",
    };
  }

  return {
    title: `${scheme.nameHindi} | IlaGuard Crop Advisor`,
    description: scheme.shortDescriptionHindi,
  };
}

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default async function GovernmentSchemeDetailPage({
  params,
}: PageProps) {
  const { schemeId } = await params;

  const scheme =
    getGovernmentSchemeById(schemeId);

  if (!scheme) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-14">
      {/* ==========================================================
          HEADER
      ========================================================== */}

      <section className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 text-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <Link
            href="/crop-advisor/government-schemes"
            className="inline-flex items-center gap-2 text-sm font-medium text-green-100 hover:text-white"
          >
            ← सभी सरकारी योजनाएँ
          </Link>

          <div className="mt-7">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold">
              {scheme.category}
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              {scheme.nameHindi}
            </h1>

            <p className="mt-2 text-base text-green-100">
              {scheme.nameEnglish}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-lg bg-white/10 px-3 py-2 text-sm">
                {scheme.government}
              </span>

              <span className="rounded-lg bg-white/10 px-3 py-2 text-sm">
                {scheme.officialSource}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          CONTENT
      ========================================================== */}

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Description */}

        <section className="-mt-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-md sm:p-7">
          <p className="text-base leading-7 text-gray-700">
            {scheme.shortDescriptionHindi}
          </p>
        </section>

        {/* Benefits */}

        <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
          <h2 className="text-xl font-extrabold text-gray-900">
            🌾 क्या लाभ मिलता है?
          </h2>

          <ul className="mt-4 space-y-3">
            {scheme.benefitsHindi.map(
              (benefit, index) => (
                <li
                  key={`${scheme.id}-benefit-${index}`}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>

                  <span>{benefit}</span>
                </li>
              )
            )}
          </ul>
        </section>

        {/* Eligibility */}

        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
          <h2 className="text-xl font-extrabold text-gray-900">
            👨‍🌾 पात्रता
          </h2>

          <ul className="mt-4 space-y-3">
            {scheme.eligibilityHindi.map(
              (item, index) => (
                <li
                  key={`${scheme.id}-eligibility-${index}`}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                >
                  <span className="mt-1 text-green-700">
                    •
                  </span>

                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
        </section>

        {/* Documents */}

        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
          <h2 className="text-xl font-extrabold text-gray-900">
            📄 आवश्यक दस्तावेज़
          </h2>

          <ul className="mt-4 space-y-3">
            {scheme.documentsHindi.map(
              (document, index) => (
                <li
                  key={`${scheme.id}-document-${index}`}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                >
                  <span className="mt-1 text-green-700">
                    •
                  </span>

                  <span>{document}</span>
                </li>
              )
            )}
          </ul>
        </section>

        {/* Application */}

        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
          <h2 className="text-xl font-extrabold text-gray-900">
            📝 आवेदन कैसे करें?
          </h2>

          <ol className="mt-5 space-y-4">
            {scheme.applicationProcessHindi.map(
              (step, index) => (
                <li
                  key={`${scheme.id}-step-${index}`}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-sm leading-6 text-gray-700">
                    {step}
                  </p>
                </li>
              )
            )}
          </ol>
        </section>

        {/* Official Website */}

        <section className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5 sm:p-7">
          <h2 className="text-lg font-extrabold text-green-950">
            आधिकारिक जानकारी
          </h2>

          <p className="mt-2 text-sm leading-6 text-green-900">
            आवेदन करने या योजना की वर्तमान पात्रता और
            नियम जानने के लिए आधिकारिक सरकारी स्रोत
            देखें।
          </p>

          <a
            href={scheme.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-green-800 sm:w-auto sm:inline-flex"
          >
            आधिकारिक वेबसाइट पर जाएँ
            <span>↗</span>
          </a>

          <p className="mt-3 text-xs text-green-800">
            स्रोत: {scheme.officialSource}
          </p>
        </section>

        {/* Verification */}

        {scheme.lastVerified && (
          <p className="mt-5 text-center text-xs leading-5 text-gray-500">
            उपलब्ध योजना जानकारी का अंतिम सत्यापन:{" "}
            {scheme.lastVerified}
          </p>
        )}

        {/* Notice */}

        <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <span className="text-xl">⚠️</span>

            <div>
              <h2 className="font-bold text-amber-950">
                जरूरी सूचना
              </h2>

              <p className="mt-2 text-sm leading-6 text-amber-900">
                योजना की पात्रता, लाभ, आवेदन प्रक्रिया और
                आवश्यक दस्तावेज़ समय के साथ बदल सकते हैं।
                आवेदन करने से पहले संबंधित सरकारी वेबसाइट
                पर वर्तमान जानकारी अवश्य जाँचें।
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}