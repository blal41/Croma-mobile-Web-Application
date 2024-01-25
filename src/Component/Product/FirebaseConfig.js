// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxkuiTRGbgaUBCzPgl70MkRDuO10IQ35w",
  authDomain: "mobile-4130.firebaseapp.com",
  databaseURL: "https://mobile-4130-default-rtdb.firebaseio.com/",
  projectId: "mobile-4130",
  storageBucket: "mobile-4130.appspot.com",
  messagingSenderId: "981641457563",
  appId: "1:981641457563:web:67dd90af2ff8d6582fbb3e",
  measurementId: "G-3ZRD58G4NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database};