// src/data/cropCalendar.ts

export type CropPriority = 1 | 2 | 3;

export type SowingWindow = {
  startMonth: number;
  endMonth: number;
  priority: CropPriority;
};

export type CropCalendar = {
  cropId: string;

  /**
   * State-specific calendar.
   * For now:
   * 1 = Bihar
   */
  stateId: number;

  sowingWindows: SowingWindow[];
};

/**
 * Crop sowing calendar
 *
 * Priority:
 * 1 = Highly suitable / preferred window
 * 2 = Suitable / secondary window
 * 3 = Conditional / limited window
 */
export const CROP_CALENDAR: CropCalendar[] = [
  // ============================================================
  // BRINJAL / BAINGAN
  // ============================================================
  {
    cropId: "brinjal",
    stateId: 1,

    sowingWindows: [
      {
        startMonth: 2,
        endMonth: 3,
        priority: 1,
      },

      {
        startMonth: 6,
        endMonth: 7,
        priority: 1,
      },

      {
        startMonth: 8,
        endMonth: 10,
        priority: 2,
      },

      {
        startMonth: 11,
        endMonth: 12,
        priority: 2,
      },

      {
        startMonth: 1,
        endMonth: 1,
        priority: 3,
      },
    ],
  },

  // ============================================================
  // OKRA / BHINDI
  // ============================================================
  {
    cropId: "okra",
    stateId: 1,

    sowingWindows: [
      {
        startMonth: 2,
        endMonth: 7,
        priority: 1,
      },

      {
        startMonth: 1,
        endMonth: 1,
        priority: 3,
      },

      {
        startMonth: 12,
        endMonth: 12,
        priority: 3,
      },
    ],
  },

  // ============================================================
  // TOMATO / TAMATAR
  // ============================================================
  {
    cropId: "tomato",
    stateId: 1,

    sowingWindows: [
      {
        startMonth: 9,
        endMonth: 10,
        priority: 1,
      },

      {
        startMonth: 11,
        endMonth: 12,
        priority: 2,
      },

      {
        startMonth: 2,
        endMonth: 3,
        priority: 2,
      },

      {
        startMonth: 1,
        endMonth: 1,
        priority: 2,
      },
    ],
  },

  // ============================================================
  // CAULIFLOWER / PHOOLGOBHI
  // ============================================================
  {
    cropId: "cauliflower",
    stateId: 1,

    sowingWindows: [
      {
        startMonth: 9,
        endMonth: 11,
        priority: 1,
      },

      {
        startMonth: 12,
        endMonth: 1,
        priority: 2,
      },

      {
        startMonth: 8,
        endMonth: 8,
        priority: 2,
      },
    ],
  },

   // ============================================================
	
	// SPINACH / PALAK
	// ============================================================
	{
	  cropId: "spinach",
	  stateId: 1,

	  sowingWindows: [
		{
		  startMonth: 9,
		  endMonth: 11,
		  priority: 1,
		},

		{
		  startMonth: 12,
		  endMonth: 2,
		  priority: 2,
		},

		{
		  startMonth: 8,
		  endMonth: 8,
		  priority: 2,
		},

		{
		  startMonth: 3,
		  endMonth: 3,
		  priority: 3,
		},
	  ],
	},
	// ============================================================
	// CORIANDER / DHANIYA
	// ============================================================
	{
	  cropId: "coriander",
	  stateId: 1,

	  sowingWindows: [
		{
		  startMonth: 10,
		  endMonth: 11,
		  priority: 1,
		},

		{
		  startMonth: 12,
		  endMonth: 1,
		  priority: 2,
		},

		{
		  startMonth: 9,
		  endMonth: 9,
		  priority: 2,
		},

		{
		  startMonth: 2,
		  endMonth: 2,
		  priority: 3,
		},
	  ],
	},
];