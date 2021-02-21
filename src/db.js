import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCm1KnaYY7sCFwK7lyIEW8DfCy67vXh1vg",
    authDomain: "dudu-chatapp.firebaseapp.com",
    projectId: "dudu-chatapp",
    storageBucket: "dudu-chatapp.appspot.com",
    messagingSenderId: "54596190584",
    appId: "1:54596190584:web:b6851385d1ecf6ad02088d"
};

const db = firebase.initializeApp(config);

export default db;