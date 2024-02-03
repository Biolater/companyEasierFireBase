// firebase.js
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPIoUS5Kr-vRsXmgZGFhuDSzzqvng9aJE",
  authDomain: "companyeasier.firebaseapp.com",
  projectId: "companyeasier",
  storageBucket: "companyeasier.appspot.com",
  messagingSenderId: "1079214055136",
  appId: "1:1079214055136:web:e682b971fd01fbef613a85"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
