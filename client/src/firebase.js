// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-56f96.firebaseapp.com",
  projectId: "real-estate-56f96",
  storageBucket: "real-estate-56f96.firebasestorage.app",
  messagingSenderId: "684680344400",
  appId: "1:684680344400:web:6e0d244cf95dcd83963255"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);