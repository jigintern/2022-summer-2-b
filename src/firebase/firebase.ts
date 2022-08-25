// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD061G4BWC600llRvl6D9zL6xKTk8rLxFc",
  authDomain: "jig-jp-teamb.firebaseapp.com",
  projectId: "jig-jp-teamb",
  storageBucket: "jig-jp-teamb.appspot.com",
  messagingSenderId: "604918463020",
  appId: "1:604918463020:web:3ce84ca7d18d0b8c8d2f89",
  measurementId: "G-J6KYKX212J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
