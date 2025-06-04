import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Toaster } from "react-hot-toast";
import useProtectAxios from "../hooks/useProtectAxios";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google login
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // create user with email and password
  const createNewUser = (email, passowrd) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, passowrd);
  };

  // login user with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user profile
  const updateUser = (User, updateInfo) => {
    setLoading(true);
    return updateProfile(User, updateInfo);
  };

  // set observer to user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
    });

    return () => {
      unSubscribe();
    };
  }, []);

  console.log(user);

  const authInfo = {
    loginWithGoogle,
    createNewUser,
    loginUser,
    logOutUser,
    updateUser,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
