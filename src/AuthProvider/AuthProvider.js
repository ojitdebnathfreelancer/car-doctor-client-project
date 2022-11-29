import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    // user state 
    const [loaging, setLoading] = useState(true);
    // loading 

    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password);
    }
    // create user with email pass 

    const loginUser = (email, password) =>{
          return signInWithEmailAndPassword(auth,email,password);
    }
    // login user 

    const updateUser = (profile) =>{
        setLoading(false);
        return updateProfile(auth.currentUser, profile)
    }
    // update user info 

    const logoutUser = () =>{
        return signOut(auth)
    }
    // signout user 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    },[]);
    // observ for current user 

    const authInfo ={user, createUser, updateUser, loginUser, logoutUser, loaging};
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;