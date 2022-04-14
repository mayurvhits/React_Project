import firebase from "firebase/compat/app"
import {initializeApp} from "firebase/app"
import {getAuth} from "@firebase/auth"
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyC1QXLRC4alJC2d5PUGNP1joxwsdaaW5pk",
    authDomain: "auth-development-7e0b5.firebaseapp.com",
    projectId: "auth-development-7e0b5",
    storageBucket: "auth-development-7e0b5.appspot.com",
    messagingSenderId: "1051848201112",
    appId: "1:1051848201112:web:4f2ed1354a27643754d1ed"
}

export const app = initializeApp(firebaseConfig);
const fireDb = firebase.initializeApp(firebaseConfig)


export const storage = getStorage(app)
export const db  = getFirestore(app)
export const auth = getAuth(app);
         
export default fireDb.database().ref()