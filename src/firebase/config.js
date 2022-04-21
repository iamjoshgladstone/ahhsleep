// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getFirestore, onSnapshot, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPSsiFk3TWcAWmzJXaopP99n0tijWtgrY",
  authDomain: "sleepy-words.firebaseapp.com",
  projectId: "sleepy-words",
  storageBucket: "sleepy-words.appspot.com",
  messagingSenderId: "1084207092439",
  appId: "1:1084207092439:web:68f4cc5a6b9df43f775692",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app, "gs://sleepy-words.appspot.com");

export { db, storage };
