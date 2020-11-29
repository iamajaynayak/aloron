import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAeETmouH5qLGDkwta1nEdX8xafK7wm5aI",
  authDomain: "mydiary-76aff.firebaseapp.com",
  databaseURL: "https://mydiary-76aff.firebaseio.com",
  projectId: "mydiary-76aff",
  storageBucket: "mydiary-76aff.appspot.com",
  messagingSenderId: "887471750765",
  appId: "1:887471750765:web:1c6aaed719e968575f0964",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
