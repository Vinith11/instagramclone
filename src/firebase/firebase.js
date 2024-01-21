import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyDtLZUeE-Sd3eWQXIb7Dk_ge8VFFltVGb0",
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  // authDomain: "instaclone-ffb59.firebaseapp.com",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  // projectId: "instaclone-ffb59",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  // storageBucket: "instaclone-ffb59.appspot.com",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

  // messagingSenderId: "921637534203",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

  // appId: "1:921637534203:web:567a5394a41da1135db35e",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,

  // measurementId: "G-344VSTNHPL",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
