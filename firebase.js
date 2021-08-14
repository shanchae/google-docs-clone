import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNCgkF-_vcFh3J7nPXkoX8EegN8uEjpjA",
    authDomain: "docs-clone-32c12.firebaseapp.com",
    projectId: "docs-clone-32c12",
    storageBucket: "docs-clone-32c12.appspot.com",
    messagingSenderId: "312473214132",
    appId: "1:312473214132:web:e83b300648ab9b7ce20be1",
    measurementId: "G-M77V5P374C"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export { db };