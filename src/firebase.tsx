// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpKKIpcPVfhZD5SqcZUHeLa0M_ipEUHxQ",
  authDomain: "maping-1193a.firebaseapp.com",
  databaseURL:
    "https://maping-1193a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "maping-1193a",
  storageBucket: "maping-1193a.appspot.com",
  messagingSenderId: "576622177691",
  appId: "1:576622177691:web:112eab9b8aa63383d0453e",
  measurementId: "G-MRTP9H95E1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
