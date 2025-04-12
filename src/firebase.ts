// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

// ✅ Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Export Firebase Auth and Firestore instances with types
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
