import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  //confi
  apikey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAI,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;
