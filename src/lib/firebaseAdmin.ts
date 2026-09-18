// ============================================================
// Firebase Admin SDK
// Server-side only
// ============================================================

import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";

function getFirebaseAdminApp() {
  const existingApps = getApps();

  if (existingApps.length > 0) {
    return existingApps[0];
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  );
  const databaseURL = process.env.FIREBASE_DATABASE_URL;

  if (!projectId) {
    throw new Error("Missing FIREBASE_PROJECT_ID");
  }

  if (!clientEmail) {
    throw new Error("Missing FIREBASE_CLIENT_EMAIL");
  }

  if (!privateKey) {
    throw new Error("Missing FIREBASE_PRIVATE_KEY");
  }

  if (!databaseURL) {
    throw new Error("Missing FIREBASE_DATABASE_URL");
  }

  return initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
    databaseURL,
  });
}

const firebaseAdminApp = getFirebaseAdminApp();

export const adminDatabase = getDatabase(firebaseAdminApp);