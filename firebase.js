// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiyoSpMAkaebpsVQlkgf3JcJc99hwfXAY",
  authDomain: "insta-2-yt-6a109.firebaseapp.com",
  projectId: "insta-2-yt-6a109",
  storageBucket: "insta-2-yt-6a109.appspot.com",
  messagingSenderId: "822102907098",
  appId: "1:822102907098:web:a4366c99d908c6928a6de3",
  measurementId: "G-G7PVD29Z7W"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
const db=getFirestore()
const storage=getStorage()

export {app,db,storage}