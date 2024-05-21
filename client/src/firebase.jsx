// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9837a.firebaseapp.com",
  projectId: "mern-blog-9837a",
  storageBucket: "mern-blog-9837a.appspot.com",
  messagingSenderId: "356286189946",
  appId: "1:356286189946:web:12fda6403408e0a78d06c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);