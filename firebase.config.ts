import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6AXtAH6Dl6wErapcRwlfFFKnWesnuGU8",
  authDomain: "dev-prostrikers.firebaseapp.com",
  projectId: "dev-prostrikers",
  storageBucket: "dev-prostrikers.appspot.com",
  messagingSenderId: "1069381481087",
  appId: "1:1069381481087:web:1b38cc0d18b9e1e5c2454a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
