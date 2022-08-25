import firebase from "firebase/app";
import "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //config
  apikey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTT_ID,
  storageBucket: "maping-1193a.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const db = getFirestore(firebase);
export default db;
