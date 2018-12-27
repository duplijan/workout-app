//only core funcionality from app, not everything
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyD_0iDrdncsiC8f-eVy5bN7ZmucoGOv9MQ",
  authDomain: "workout-app-1f3cb.firebaseapp.com",
  databaseURL: "https://workout-app-1f3cb.firebaseio.com",
  projectId: "workout-app-1f3cb",
  storageBucket: "workout-app-1f3cb.appspot.com",
  messagingSenderId: "588365480631"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
