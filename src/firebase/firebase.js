// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNHy998HsBnXAK-B3EU1jJ4dqmRcdnWxk",
  authDomain: "crudds.firebaseapp.com",
  projectId: "crudds",
  storageBucket: "crudds.appspot.com",
  messagingSenderId: "414472122205",
  appId: "1:414472122205:web:0e8765edbf32e7d2f982b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
