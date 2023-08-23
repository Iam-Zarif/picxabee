// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfVvm4lMTRTS24SuRPejvWpRSVMvNJ0Xw",
  authDomain: "picxabee-e3af1.firebaseapp.com",
  projectId: "picxabee-e3af1",
  storageBucket: "picxabee-e3af1.appspot.com",
  messagingSenderId: "841081046221",
  appId: "1:841081046221:web:64a6e04178875a5a4a5584"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth =  getAuth(app);

export { app, auth, db, storage };
