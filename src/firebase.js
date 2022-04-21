import firebase from "firebase/compat/app"
import {initializeApp} from "firebase/app"
import {getAuth} from "@firebase/auth"
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyDCqTBcMbm0a6EB1t4gfcpp86Gu5tDkjX8",
    authDomain: "auth-production-d5e55.firebaseapp.com",
    databaseURL: "https://auth-production-d5e55-default-rtdb.firebaseio.com",
    projectId: "auth-production-d5e55",
    storageBucket: "auth-production-d5e55.appspot.com",
    messagingSenderId: "507824967789",
    appId: "1:507824967789:web:0879613ff7f6cf45a62f64"
}

export const app = initializeApp(firebaseConfig);
const fireDb = firebase.initializeApp(firebaseConfig)


export const storage = getStorage(app)
export const db  = getFirestore(app)
export const auth = getAuth(app);
         
export default fireDb.database().ref()