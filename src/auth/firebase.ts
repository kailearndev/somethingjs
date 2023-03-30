// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjZ8iuWWqAsgdIzzXq1Im5WDmzi8M85cw",
  authDomain: "somethingjs-2b901.firebaseapp.com",
  projectId: "somethingjs-2b901",
  storageBucket: "somethingjs-2b901.appspot.com",
  messagingSenderId: "917279259284",
  appId: "1:917279259284:web:a985173a70238dfa5b9281",
  measurementId: "G-Q00RX0BS8B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
