 import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
       apiKey: "AIzaSyAG55k77fkLwuRAf6b_ZrzilF7inkCm5js",
       authDomain: "todo-app-cp-7ffef.firebaseapp.com",
       databaseURL: "https://todo-app-cp-7ffef-default-rtdb.europe-west1.firebasedatabase.app",
       projectId: "todo-app-cp-7ffef",
       storageBucket: "todo-app-cp-7ffef.appspot.com",
       messagingSenderId: "331117067979",
       appId: "1:331117067979:web:916b83764a94cef26a254e",
       measurementId: "G-WM1PBZLN00"
    });
  const db = firebaseApp.firestore();

export default db;