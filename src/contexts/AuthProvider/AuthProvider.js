import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState({ displayName: null });
  const [loading, setLoading] = useState(true);
  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInWithPassword = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };
  const addNamePhoto = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };
  const googleLogIn = () => {
    setLoading(true);

    return signInWithPopup(auth, providerGoogle);
  };
  const gitHubLogIn = () => {
    setLoading(true);

    return signInWithPopup(auth, providerGithub);
  };
  const logOut = () => {
    setLoading(true);

    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const userInfo = {
    user,
    googleLogIn,
    gitHubLogIn,
    logOut,
    createUser,
    logInWithPassword,
    addNamePhoto,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
