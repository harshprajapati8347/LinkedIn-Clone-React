import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR9i3Idsqi6_OGB_HcXoadmhPce_oYdUE",
  authDomain: "linkedin-clone-99b72.firebaseapp.com",
  projectId: "linkedin-clone-99b72",
  storageBucket: "linkedin-clone-99b72.appspot.com",
  messagingSenderId: "503519369849",
  appId: "1:503519369849:web:41c067969c519ba02852a8",
  measurementId: "G-4BSV68GYR1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
