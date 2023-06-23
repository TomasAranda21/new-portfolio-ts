// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "@firebase/storage"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_APPID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
    databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
};


// Initialize Firebase
export const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const storages = getStorage(app)

export const auth = getAuth(app)