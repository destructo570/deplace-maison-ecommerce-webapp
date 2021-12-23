import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBzxHRnrvyMLs3PLCkJHkjDxrxgbDsnMXU",
  authDomain: "deplacemaisontest.firebaseapp.com",
  databaseURL: "https://deplacemaisontest-default-rtdb.firebaseio.com",
  projectId: "deplacemaisontest",
  storageBucket: "deplacemaisontest.appspot.com",
  messagingSenderId: "591589190690",
  appId: "1:591589190690:web:44badcbd620ae46da9ae7b",
});

const db = getFirestore();

export default db;
