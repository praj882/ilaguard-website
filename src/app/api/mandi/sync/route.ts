// ============================================================
// IlaGuard Mandi Sync API
// ============================================================

import { NextResponse } from "next/server";

import {
  fetchAllMandiRecords,
} from "@/lib/mandiApi";

import {
  syncMandiRecords,
} from "@/lib/mandiApiSyncService";

export const runtime = "nodejs";

export const dynamic = "force-dynamic";

// ============================================================
// GET /api/mandi/sync
// ============================================================

export async function GET(
  request: Request
) {
  try {
    // ========================================================
    // Protect endpoint
    // ========================================================

    const cronSecret =
      process.env.CRON_SECRET;

    if (!cronSecret) {
      console.error(
        "[Mandi Sync] CRON_SECRET is not configured"
      );

      return NextResponse.json(
        {
          success: false,
          error: "Cron authentication is not configured",
        },
        {
          status: 500,
        }
      );
    }

    const authorization =
      request.headers.get(
        "authorization"
      );

    const expected =
      `Bearer ${cronSecret}`;

    if (authorization !== expected) {
      console.warn(
        "[Mandi Sync] Unauthorized request"
      );

      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    // ========================================================
    // Start sync
    // ========================================================

    console.log(
      "[Mandi Sync] Starting..."
    );

    // ========================================================
    // Fetch government data
    // ========================================================

    const records =
      await fetchAllMandiRecords();

    console.log(
      `[Mandi Sync] Government records: ${records.length}`
    );

    // ========================================================
    // Sync Firebase
    // ========================================================

    const result =
      await syncMandiRecords(
        records
      );

    console.log(
      "[Mandi Sync] Finished:",
      result
    );

    // ========================================================
    // Response
    // ========================================================

    return NextResponse.json({
      success: true,

      message:
        "Mandi synchronization completed",

      fetchedRecords:
        records.length,

      result,
    });

  } catch (error) {

    console.error(
      "[Mandi Sync] Fatal error:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}