// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWoiSzgjmHV5EcG5HJuCyLy8aCJYN-c_g",
  authDomain: "listed-ui.firebaseapp.com",
  projectId: "listed-ui",
  storageBucket: "listed-ui.appspot.com",
  messagingSenderId: "327927185486",
  appId: "1:327927185486:web:d776711e0c08f58c2b831f",
  measurementId: "G-LMETRW2Y9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export {app ,analytics,  auth}