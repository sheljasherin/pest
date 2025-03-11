import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYDDuIEe7SMRZfbpqnwuw6zXHEV0qJ8Zg",
  authDomain: "pest1-c87f8.firebaseapp.com",
  projectId: "pest1-c87f8",
  storageBucket: "pest1-c87f8.firebasestorage.app",
  messagingSenderId: "674938078787",
  appId: "1:674938078787:web:0b45f76e0e4f75e00cf6f6",
  measurementId: "G-E4EK30R0L3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
