import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArPXfo0BGSoJUKCpcWFev8XDl_OE4hkAk",
  authDomain: "sparechat-44560.firebaseapp.com",
  projectId: "sparechat-44560",
  storageBucket: "sparechat-44560.appspot.com",
  messagingSenderId: "1022382568019",
  appId: "1:1022382568019:web:2173906b362108924a0ca6"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };