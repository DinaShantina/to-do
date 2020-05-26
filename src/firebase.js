import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDN9yU9AlrdJlZA71ZHwojuqpGx7xvu8Pk",
  authDomain: "to-do-45bb6.firebaseapp.com",
  databaseURL: "https://to-do-45bb6.firebaseio.com",
  projectId: "to-do-45bb6",
  storageBucket: "to-do-45bb6.appspot.com",
  messagingSenderId: "781460279306",
  appId: "1:781460279306:web:706a251f2ae6b0f4940ff3",
  measurementId: "G-Z987C7K2WD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();

export default db;
