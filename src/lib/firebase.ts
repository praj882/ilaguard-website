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

  // IMPORTANT:
  // Add your Firebase Realtime Database URL
  databaseURL:
    process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

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

// ============================================================
// REALTIME DATABASE
// ============================================================

export const database =
  getDatabase(app);