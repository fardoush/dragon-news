import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google  Login

  const googleProvider = new GoogleAuthProvider();
  const githunProvider = new GithubAuthProvider();

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // GitHub Login 

  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githunProvider );
  }

  // User Sign UP Korar jonno

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update User

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // LogOut /
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // Set an authentication state observer and get user data

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // share korar jonno
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
    signInWithGoogle,
    signInWithGithub
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
