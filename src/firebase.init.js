// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCDBR1lgCXG3yRUZOOZmHb6sNsDH_OfNo",
  authDomain: "auth-integration1.firebaseapp.com",
  projectId: "auth-integration1",
  storageBucket: "auth-integration1.firebasestorage.app",
  messagingSenderId: "482179813972",
  appId: "1:482179813972:web:b67a669f0cf285d00213c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);