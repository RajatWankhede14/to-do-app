import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBAR7CV7OcY_DrbbRArzqmLIb7oKubt0y8",
    authDomain: "to-do-app-ead96.firebaseapp.com",
    projectId: "to-do-app-ead96",
    storageBucket: "to-do-app-ead96.appspot.com",
    messagingSenderId: "936469061677",
    appId: "1:936469061677:web:09050472b987720c0158a4",
    measurementId: "G-1B4E07BTGR"
});

const db = firebaseApp.firestore();

export default db;