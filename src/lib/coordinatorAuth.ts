// src/lib/coordinatorAuth.ts

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";

import {
  get,
  ref,
} from "firebase/database";

import {
  auth,
  database,
} from "@/lib/firebase";

// ============================================================
// TYPES
// ============================================================

export type CoordinatorProfile = {
  active: boolean;
  name?: string;
  createdAt?: number;
};

// ============================================================
// LOGIN
// ============================================================

export async function coordinatorLogin(
  email: string,
  password: string
): Promise<User> {
  const credential = await signInWithEmailAndPassword(
    auth,
    email.trim(),
    password
  );

  const user = credential.user;

  const coordinatorRef = ref(
    database,
    `coordinators/${user.uid}`
  );

  const snapshot = await get(coordinatorRef);

  if (!snapshot.exists()) {
    await signOut(auth);

    throw new Error(
      "This account is not authorized as a coordinator."
    );
  }

  const profile =
    snapshot.val() as CoordinatorProfile;

  if (profile.active !== true) {
    await signOut(auth);

    throw new Error(
      "Your coordinator account is inactive."
    );
  }

  return user;
}

// ============================================================
// GET CURRENT COORDINATOR
// ============================================================

export async function getCoordinatorProfile(
  user: User
): Promise<CoordinatorProfile | null> {
  const coordinatorRef = ref(
    database,
    `coordinators/${user.uid}`
  );

  const snapshot = await get(coordinatorRef);

  if (!snapshot.exists()) {
    return null;
  }

  const profile =
    snapshot.val() as CoordinatorProfile;

  if (profile.active !== true) {
    return null;
  }

  return profile;
}

// ============================================================
// AUTH LISTENER
// ============================================================

export function subscribeToAuth(
  callback: (user: User | null) => void
) {
  return onAuthStateChanged(auth, callback);
}

// ============================================================
// LOGOUT
// ============================================================

export async function coordinatorLogout() {
  await signOut(auth);
}