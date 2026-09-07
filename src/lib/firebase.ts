// src/lib/firebase.ts
import {
  initializeApp,
  getApps,
  getApp,
} from "firebase/app";

import {
  getFirestore,
} from "firebase/firestore";

import {
  getDatabase,
} from "firebase/database";
import { 
  getAuth,
} from "firebase/auth";

// ============================================================
// FIREBASE CONFIG
// ============================================================

const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env
      .NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL:
    process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

// ============================================================
// VALIDATE CONFIG
// ============================================================

if (typeof window !== "undefined") {
  const missing: string[] = [];

  if (!firebaseConfig.apiKey) {
    missing.push("NEXT_PUBLIC_FIREBASE_API_KEY");
  }

  if (!firebaseConfig.authDomain) {
    missing.push("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN");
  }

  if (!firebaseConfig.projectId) {
    missing.push("NEXT_PUBLIC_FIREBASE_PROJECT_ID");
  }

  if (!firebaseConfig.appId) {
    missing.push("NEXT_PUBLIC_FIREBASE_APP_ID");
  }

  if (!firebaseConfig.databaseURL) {
    missing.push("NEXT_PUBLIC_FIREBASE_DATABASE_URL");
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing Firebase environment variables: ${missing.join(
        ", "
      )}`
    );
  }
}

// ============================================================
// INITIALIZE FIREBASE APP
// ============================================================

const app =
  getApps().length > 0
    ? getApp()
    : initializeApp(firebaseConfig);

// ============================================================
// FIRESTORE
// ============================================================

export const db =
  getFirestore(app);
export const auth = 
  getAuth(app);

// ============================================================
// REALTIME DATABASE
// ============================================================
export const database =
  getDatabase(app);
  
export default app;