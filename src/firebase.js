import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPIoUS5Kr-vRsXmgZGFhuDSzzqvng9aJE",
  authDomain: "companyeasier.firebaseapp.com",
  projectId: "companyeasier",
  storageBucket: "companyeasier.appspot.com",
  messagingSenderId: "1079214055136",
  appId: "1:1079214055136:web:e682b971fd01fbef613a85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }