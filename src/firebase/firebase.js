import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtLZUeE-Sd3eWQXIb7Dk_ge8VFFltVGb0",
  authDomain: "instaclone-ffb59.firebaseapp.com",
  projectId: "instaclone-ffb59",
  storageBucket: "instaclone-ffb59.appspot.com",
  messagingSenderId: "921637534203",
  appId: "1:921637534203:web:567a5394a41da1135db35e",
  measurementId: "G-344VSTNHPL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
