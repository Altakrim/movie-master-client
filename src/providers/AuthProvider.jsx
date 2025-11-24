import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React from 'react';
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth state changed:", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const logoutUser = () => {
        return signOut(auth);
    };

    const authInfo = {
        user, 
        loading,
        auth,
        logoutUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

