    import React, { useContext, createContext, useState, useEffect} from 'react'
    import {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
        GoogleAuthProvider,
        signInWithPopup
    } from "@firebase/auth"
    import { auth} from '../firebase'
    
    const AuthContext = createContext()

    
    export function AuthProvider({children}) {
        
        const [user ,setUser] = useState("");
        function logIn(email, password) {
            // console.log("Email", email);
            return signInWithEmailAndPassword(auth, email, password)
         }

        function signUp(email, password) {
           return createUserWithEmailAndPassword(auth, email, password)
        }

        function logOut() {
            console.log("Logged out Successfully");
            return signOut(auth);
        }
        
        function googleSignIn() {
            const googleAuthProvider = new GoogleAuthProvider();
            return signInWithPopup(auth, googleAuthProvider)
        }
        
        useEffect(() => {
           const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
               setUser(currentuser);
            //    console.log(user.uid);
            })
            
            return () => {
                unsubscribe();
            }
        }, []);

        
       
       
        
        return (
            
            <AuthContext.Provider value={{user, logIn, signUp, logOut, googleSignIn}}>
               {children}
           </AuthContext.Provider>
        
        )
    }
    
    export function useAuth() {
        return useContext(AuthContext)
    }
    // export default AuthProvider