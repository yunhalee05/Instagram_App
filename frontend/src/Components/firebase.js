// import firebase from "firebase/app";
import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCA3K2h0ruFbm5uGSSKy7phlfciwyDk44s",
    authDomain: "instaclone-81390.firebaseapp.com",
    projectId: "instaclone-81390",
    storageBucket: "instaclone-81390.appspot.com",
    messagingSenderId: "132017038415",
    appId: "1:132017038415:web:5273f00004d375b496b63a",
    measurementId: "G-DC46XH78GV"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();

export {storage, auth};



