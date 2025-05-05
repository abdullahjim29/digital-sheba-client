import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google login
    const loginWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, provider);
    }

    // create user with email and password
    const createNewUser = (email, passowrd) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, passowrd);
    }
    
    // login user with email and password
    const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }

    // set observer to user
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false);
      })

      return () => {
        unSubscribe();
      }
    }, 
    [])

    console.log(user);

  const authInfo = {
    loginWithGoogle,
    createNewUser,
    loginUser,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
