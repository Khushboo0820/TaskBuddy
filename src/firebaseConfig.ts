import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA07cTfQ7xPf-QiZ7CUhEQcFYld6q4PUE4",
  authDomain: "taskbuddy-4bb78.firebaseapp.com",
  projectId: "taskbuddy-4bb78",
  storageBucket: "taskbuddy-4bb78.firebasestorage.app",
  messagingSenderId: "536489133694",
  appId: "1:536489133694:web:6b8a8c7a2e945b933fba2f",
  measurementId: "G-D934WTQFNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


 export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
