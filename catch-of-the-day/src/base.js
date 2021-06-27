import Rebase from 're-base';
import firebase from 'firebase';


const fireabseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjniPabN3UuJmAug70qO_oMjxNrsMH0ZM",
    authDomain: "catch-of-the-day-adam-2054a.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-adam-2054a-default-rtdb.firebaseio.com",
    projectId: "catch-of-the-day-adam-2054a",
    storageBucket: "catch-of-the-day-adam-2054a.appspot.com",
    messagingSenderId: "295931553091",
    appId: "1:295931553091:web:91f611020181d033b0fbf6"
});


const base = Rebase.createClass(fireabseApp.database());

// This is the named export
export { fireabseApp };

// This is the default
export default base;