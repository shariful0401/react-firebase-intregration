// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSgwizUK-Qwb2KcAshzCpYdhCzuxDzKuA",
  authDomain: "react-firebase-intregration.firebaseapp.com",
  projectId: "react-firebase-intregration",
  storageBucket: "react-firebase-intregration.appspot.com",
  messagingSenderId: "471616345324",
  appId: "1:471616345324:web:d38eaa02cf82f03c8441c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;