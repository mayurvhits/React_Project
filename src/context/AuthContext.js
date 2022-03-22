    import React, { useContext, createContext, useState, useEffect} from 'react'
    import {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
       
    } from "firebase/auth"
    import { auth} from '../firebase'
    
    const AuthContext = createContext()

    
    export function AuthProvider({children}) {
        
        const [user ,setUser] = useState("");
        function logIn(email, password) {
            return signInWithEmailAndPassword(auth, email, password)
         }

        function signUp(email, password) {
           return createUserWithEmailAndPassword(auth, email, password)
        }

        
        useEffect(() => {
           const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
               setUser(currentuser);
            })
            
            return () => {
                unsubscribe();
            }
        }, []);
       
       
        
        return (
            
            <AuthContext.Provider value={{user, logIn, signUp}}>
               {children}
           </AuthContext.Provider>
        
        )
    }
    
    export function useAuth() {
        return useContext(AuthContext)
    }
    // export default AuthProvider