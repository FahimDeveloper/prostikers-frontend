import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { configKey } from "./src/config";

const firebaseConfig = {
  apiKey: configKey.APIKEY,
  authDomain: configKey.AUTHDOMAIN,
  projectId: configKey.PROJECTID,
  storageBucket: configKey.STORAGEBUCKET,
  messagingSenderId: configKey.MESSAGINGSENDERID,
  appId: configKey.APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
