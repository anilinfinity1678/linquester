// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDdHZxyyYxCAG44KVpK33JH0mbxrPDYi_k",
    authDomain: "linquester-bf072.firebaseapp.com",
    projectId: "linquester-bf072",
    storageBucket: "linquester-bf072.appspot.com",
    messagingSenderId: "753970495762",
    appId: "1:753970495762:web:7c26cbca752bd2efee73cb",
    measurementId: "G-KTE4CFE9CV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
