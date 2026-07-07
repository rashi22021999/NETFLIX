
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuqfuCQx4g0dsSdo7NUtW6S9qWt24ePgc",
  authDomain: "netflix-971b9.firebaseapp.com",
  projectId: "netflix-971b9",
  storageBucket: "netflix-971b9.firebasestorage.app",
  messagingSenderId: "526207087460",
  appId: "1:526207087460:web:cb65dc4d0caa4850c94071",
  measurementId: "G-CJYLH4B329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth(app);

