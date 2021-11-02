import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth   , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "firebase/auth";
import {getFirestore, collection, addDoc ,doc ,setDoc , getDoc , getDocs ,deleteDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytes ,getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCZZuYXXdfQ3zn4rxmDT3W06O3qJ4o36Lo",
  authDomain: "alcowear.firebaseapp.com",
  projectId: "alcowear",
  storageBucket: "alcowear.appspot.com",
  messagingSenderId: "1057953172834",
  appId: "1:1057953172834:web:7cc5761a184389bfc2703b",
  measurementId: "G-3S1TNCMLLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
  db,
  doc,
  setDoc,
  getDoc,
  getDocs,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteDoc
}