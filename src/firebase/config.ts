// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBC4Mfz4R7StjlMDkJk5WY7Avd-Jnrz0AI",
  authDomain: "bangi-and-vingi-gallery.firebaseapp.com",
  projectId: "bangi-and-vingi-gallery",
  storageBucket: "bangi-and-vingi-gallery.appspot.com",
  messagingSenderId: "819932585246",
  appId: "1:819932585246:web:1f1378a01e585e6e01bd0f",
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const storage=getStorage(app);
const db = getFirestore(app);

export  {auth ,storage , db};