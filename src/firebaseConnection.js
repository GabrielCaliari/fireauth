import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC8e2lS1Vcl0BHaMZSONu-k1PFvgH6VOM0",
  authDomain: "fireauth-abb54.firebaseapp.com",
  projectId: "fireauth-abb54",
  storageBucket: "fireauth-abb54.appspot.com",
  messagingSenderId: "18815701459",
  appId: "1:18815701459:web:fc48570b9c3b31b86e1f26"
};


const firebaseapp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export {db, auth};
