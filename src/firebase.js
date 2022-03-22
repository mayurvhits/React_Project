
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC1QXLRC4alJC2d5PUGNP1joxwsdaaW5pk",
    authDomain: "auth-development-7e0b5.firebaseapp.com",
    projectId: "auth-development-7e0b5",
    storageBucket: "auth-development-7e0b5.appspot.com",
    messagingSenderId: "1051848201112",
    appId: "1:1051848201112:web:4f2ed1354a27643754d1ed"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
