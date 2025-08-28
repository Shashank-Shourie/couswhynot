// lib/auth.ts
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user; // contains uid, displayName, email, photoURL
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error);
  }
};
