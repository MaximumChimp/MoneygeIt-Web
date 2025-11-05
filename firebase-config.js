// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBslqdBSE0FlmgkA3wNKLy8yTZzQDMo_XM",
  authDomain: "moneygeit.firebaseapp.com",
  projectId: "moneygeit",
  storageBucket: "moneygeit.firebasestorage.app",
  messagingSenderId: "629140419689",
  appId: "1:629140419689:web:432f3da5dd288ff0f99ef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
