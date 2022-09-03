import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZqhlEk13_PeiPGAyKfFAfHyj-MATUGZ4",
  authDomain: "portfolio-35dfd.firebaseapp.com",
  databaseURL: "https://portfolio-35dfd.firebaseio.com",
  projectId: "portfolio-35dfd",
  storageBucket: "portfolio-35dfd.appspot.com",
  messagingSenderId: "632417181065",
  appId: "1:632417181065:web:6d18b76dc4e23443ed9558",
};

export const resourceId = "tAD6hG0KxDMM1OiiRmfhRgXyY1d2";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
