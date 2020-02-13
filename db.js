import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBLy1k3pstsg3tNYHviF0HFGDV1B7p8le0",
  authDomain: "messages2-861ef.firebaseapp.com",
  databaseURL: "https://messages2-861ef.firebaseio.com",
  projectId: "messages2-861ef",
  storageBucket: "messages2-861ef.appspot.com",
  messagingSenderId: "338960010964",
  appId: "1:338960010964:web:59ffa67403817248b4f541"
});

export default firebase.firestore();
