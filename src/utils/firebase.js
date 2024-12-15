// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
require('dotenv').config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cineflixgpt-6495a.firebaseapp.com",
  projectId: "cineflixgpt-6495a",
  storageBucket: "cineflixgpt-6495a.firebasestorage.app",
  messagingSenderId: "13624842481",
  appId: "1:13624842481:web:d3aa327677a0ab6cd2b150",
  measurementId: "G-V594PXWHVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);