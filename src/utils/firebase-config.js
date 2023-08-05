import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQYJX53vHsKfduFWwyto6qFVZVEhjL_Z4",
  authDomain: "jurid-ia.firebaseapp.com",
  projectId: "jurid-ia",
  storageBucket: "jurid-ia.appspot.com",
  messagingSenderId: "537447426868",
  appId: "1:537447426868:web:235d443ef02aa71e8f1361",
  measurementId: "G-W4LCS2DJRX"
  };

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

