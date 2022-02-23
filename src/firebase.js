import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDhgdYn4ce7n2osqMJeWUNXlp5QaBdvcLA",
  authDomain: "twitter-clone-7e384.firebaseapp.com",
  projectId: "twitter-clone-7e384",
  storageBucket: "twitter-clone-7e384.appspot.com",
  messagingSenderId: "614493005318",
  appId: "1:614493005318:web:8cc3ed283259e9b34e4587",
  measurementId: "G-CMW7WPVDXF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;