import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // user data show 
    console.log(user);

    // User Sign UP Korar jonno 

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

// Set an authentication state observer and get user data

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    return ()=>{
unsubscribe();
    }

},[])

    // share korar jonno 
    const authData = {
        user,
        setUser, createUser
    }
    return <AuthContext value={authData}>
{children}
    </AuthContext>
};

export default AuthProvider;