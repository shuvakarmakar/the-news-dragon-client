// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true);
        signOut(auth);
    }

    // State Observer
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            console.log('Logged in user inside auth state', loggedUser);
            setUser(loggedUser);
            setLoading(false)
        })
        return() =>{
            return unsubscribe();
        }
    }, [])

    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;