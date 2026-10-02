// src/lib/governmentSchemeService.ts

import {
  GOVERNMENT_SCHEMES,
  type GovernmentScheme,
  type GovernmentSchemeCategory,
} from "@/data/governmentSchemes";

/*
|--------------------------------------------------------------------------
| Get all schemes
|--------------------------------------------------------------------------
*/

export function getAllGovernmentSchemes(): GovernmentScheme[] {
  return GOVERNMENT_SCHEMES;
}

/*
|--------------------------------------------------------------------------
| Get scheme by ID
|--------------------------------------------------------------------------
*/

export function getGovernmentSchemeById(
  schemeId: string
): GovernmentScheme | undefined {
  return GOVERNMENT_SCHEMES.find(
    (scheme) => scheme.id === schemeId
  );
}

/*
|--------------------------------------------------------------------------
| Get schemes for a state
|--------------------------------------------------------------------------
*/

export function getGovernmentSchemesByState(
  stateCode: string
): GovernmentScheme[] {
  return GOVERNMENT_SCHEMES.filter((scheme) => {
    if (scheme.government === "केंद्र सरकार") {
      return true;
    }

    return scheme.stateCodes?.includes(stateCode) ?? false;
  });
}

/*
|--------------------------------------------------------------------------
| Search schemes
|--------------------------------------------------------------------------
*/

export function searchGovernmentSchemes(
  schemes: GovernmentScheme[],
  query: string
): GovernmentScheme[] {
  const normalizedQuery = query
    .trim()
    .toLocaleLowerCase();

  if (!normalizedQuery) {
    return schemes;
  }

  return schemes.filter((scheme) => {
    const searchableText = [
      scheme.nameHindi,
      scheme.nameEnglish,
      scheme.shortDescriptionHindi,
      scheme.category,
      scheme.government,
      scheme.officialSource,
      ...scheme.keywords,
    ]
      .join(" ")
      .toLocaleLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

/*
|--------------------------------------------------------------------------
| Filter by category
|--------------------------------------------------------------------------
*/

export function filterGovernmentSchemesByCategory(
  schemes: GovernmentScheme[],
  category: GovernmentSchemeCategory | "सभी"
): GovernmentScheme[] {
  if (category === "सभी") {
    return schemes;
  }

  return schemes.filter(
    (scheme) => scheme.category === category
  );
}

/*
|--------------------------------------------------------------------------
| Get category counts
|--------------------------------------------------------------------------
*/

export function getGovernmentSchemeCategoryCounts(
  schemes: GovernmentScheme[]
): Record<string, number> {
  const counts: Record<string, number> = {
    सभी: schemes.length,
  };

  for (const scheme of schemes) {
    counts[scheme.category] =
      (counts[scheme.category] ?? 0) + 1;
  }

  return counts;
}

/*
|--------------------------------------------------------------------------
| Combined filtering
|--------------------------------------------------------------------------
*/

export function filterGovernmentSchemes(options: {
  stateCode: string;
  search?: string;
  category?: GovernmentSchemeCategory | "सभी";
}): GovernmentScheme[] {
  let schemes = getGovernmentSchemesByState(
    options.stateCode
  );

  schemes = searchGovernmentSchemes(
    schemes,
    options.search ?? ""
  );

  schemes = filterGovernmentSchemesByCategory(
    schemes,
    options.category ?? "सभी"
  );

  return schemes;
}