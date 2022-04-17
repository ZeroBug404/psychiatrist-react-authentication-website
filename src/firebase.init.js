// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzEWuXds8bRKZFDpC1IQlp720FvHF2W0U",
  authDomain: "psychiatrist-website.firebaseapp.com",
  projectId: "psychiatrist-website",
  storageBucket: "psychiatrist-website.appspot.com",
  messagingSenderId: "434555568475",
  appId: "1:434555568475:web:030e107af4f26dcf4b1a7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;