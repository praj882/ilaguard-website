import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { CommunityMember } from "@/types/community";

const COLLECTION = "communityMembers";

export async function addCommunityMember(
  member: CommunityMember
) {
  return await addDoc(collection(db, COLLECTION), {
    ...member,
    createdAt: serverTimestamp(),
  });
}