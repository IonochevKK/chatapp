import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD4NKXKMgYZh-HPQ9OcCw5r9U0Ovm38j2U",
  authDomain: "chat-178f9.firebaseapp.com",
  projectId: "chat-178f9",
  storageBucket: "chat-178f9.appspot.com",
  messagingSenderId: "3987210753",
  appId: "1:3987210753:web:2b96b7d82b8faec0863600",
  measurementId: "G-YN0G6SD6CB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
