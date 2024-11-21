// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs3pcJQksXco4g53V2wtkke2BpwAJEbME",
  authDomain: "easycook-72c5d.firebaseapp.com",
  databaseURL: "https://easycook-72c5d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "easycook-72c5d",
  storageBucket: "easycook-72c5d.appspot.com",
  messagingSenderId: "245653259497",
  appId: "1:245653259497:web:73dc386346346fd15b9c78",
  measurementId: "G-EMKL78R72C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
