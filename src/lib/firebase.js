// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbLUuow2XAO7c4o4rK6Ocymo2Q5ADjJP0",
  authDomain: "perfect-21e1c.firebaseapp.com",
  projectId: "perfect-21e1c",
  storageBucket: "perfect-21e1c.firebasestorage.app",
  messagingSenderId: "261344750285",
  appId: "1:261344750285:web:65dd2f84a0a2ecb3ba5784",
  measurementId: "G-JCTDGG8XRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { db, auth } from './firebase.js';

// Misol: Firestore’dan ma’lumot olish
import { collection, getDocs } from "firebase/firestore";

async function getEvents() {
  const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

getEvents();