// src/data/cropVarieties.ts

import type {
  CropVariety,
  VarietySuitability,
  SowingWindowOverride,
  CropVarietyType,
  CropVarietySource,
} from "@/types/cropVariety";

// ============================================================
// CROP-SPECIFIC VARIETY DATA
// ============================================================
import { POTATO_VARIETIES } from "@/data/varieties/potatoVarieties";
import { TOMATO_VARIETIES } from "@/data/varieties/tomatoVarieties";
import { CAULIFLOWER_VARIETIES } from "@/data/varieties/cauliflowerVarieties";

// Add the remaining crop files here as they are created.
import { BRINJAL_VARIETIES } from "@/data/varieties/brinjalVarieties";
import { OKRA_VARIETIES } from "@/data/varieties/okraVarieties";
import { SPINACH_VARIETIES } from "@/data/varieties/spinachVarieties";
import { CORIANDER_VARIETIES } from "@/data/varieties/corianderVarieties";
import { RADISH_VARIETIES } from "@/data/varieties/radishVarieties";
import { PEA_VARIETIES } from "@/data/varieties/peaVarieties";
import { CARROT_VARIETIES } from "@/data/varieties/carrotVarieties";
import { CUCUMBER_VARIETIES } from "@/data/varieties/cucumberVarieties";
import { CHILLI_VARIETIES } from "@/data/varieties/chilliVarieties";
import { BROCCOLI_VARIETIES } from "@/data/varieties/broccoliVarieties";
import { FENUGREEK_VARIETIES } from "@/data/varieties/fenugreekVarieties";
import { CABBAGE_VARIETIES } from "@/data/varieties/cabbageVarieties";
// ============================================================
// RE-EXPORT TYPES
// ============================================================

export type {
  CropVariety,
  VarietySuitability,
  SowingWindowOverride,
  CropVarietyType,
  CropVarietySource,
} from "@/types/cropVariety";

// ============================================================
// ALL CROP VARIETIES
// ============================================================

export const CROP_VARIETIES: CropVariety[] = [
  // ----------------------------------------------------------
  // Tomato
  // ----------------------------------------------------------

  ...TOMATO_VARIETIES,

  // ----------------------------------------------------------
  // Cauliflower
  // ----------------------------------------------------------

  ...CAULIFLOWER_VARIETIES,

  // ----------------------------------------------------------
  // Remaining crops
  // Uncomment these when their files are created.
  // ----------------------------------------------------------

  ...BRINJAL_VARIETIES,
  ...OKRA_VARIETIES,
  ...SPINACH_VARIETIES,
  ...CORIANDER_VARIETIES,
  ...RADISH_VARIETIES,
  ...PEA_VARIETIES,
  ...CARROT_VARIETIES,
  ...CUCUMBER_VARIETIES,
  ...CHILLI_VARIETIES,
  ...BROCCOLI_VARIETIES,
  ...FENUGREEK_VARIETIES,
  ...CABBAGE_VARIETIES,
  ...POTATO_VARIETIES,
];