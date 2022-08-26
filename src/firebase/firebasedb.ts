import { initializeApp } from "firebase/app";
//import "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD061G4BWC600llRvl6D9zL6xKTk8rLxFc",
  authDomain: "jig-jp-teamb.firebaseapp.com",
  projectId: "jig-jp-teamb",
  storageBucket: "jig-jp-teamb.appspot.com",
  messagingSenderId: "604918463020",
  appId: "1:604918463020:web:3ce84ca7d18d0b8c8d2f89",
  measurementId: "G-J6KYKX212J",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const storage = firebase.storage();
export const db = getFirestore(app);
export default db;
