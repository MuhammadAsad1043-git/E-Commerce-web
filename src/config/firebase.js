// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1q5pxoIFuWvfwpqX7O8W6kEl8jXarqus",
  authDomain: "e-commerce-8cfb9.firebaseapp.com",
  projectId: "e-commerce-8cfb9",
  storageBucket: "e-commerce-8cfb9.firebasestorage.app",
  messagingSenderId: "318207289367",
  appId: "1:318207289367:web:5fd18ad00f14c411e1d452",
  measurementId: "G-23NB35Z3WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);