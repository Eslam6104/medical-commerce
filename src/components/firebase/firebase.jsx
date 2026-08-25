import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNX_HL40nEehNHVlgc-K5hGxfwenOVUZQ",
  authDomain: "medical-care-fa537.firebaseapp.com",
  projectId: "medical-care-fa537",
  storageBucket: "medical-care-fa537.appspot.com",
  messagingSenderId: "297688195522",
  appId: "1:297688195522:web:2a59f18b0267d6face365b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
