import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAzLYh5KEiezYC7gtrpxqgRPHZNa_zM6oI",
  authDomain: "blog-ca742.firebaseapp.com",
  projectId: "blog-ca742",
  storageBucket: "blog-ca742.appspot.com",
  messagingSenderId: "808581385346",
  appId: "1:808581385346:web:add02a61a1dd226f55b89b"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

