import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { app } from "./../../firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AdminContext = createContext(null);

const auth = getAuth(app);

const AdminProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sideBarActive, setSideBarActive] = useState(false);

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const adminData = {
    user,
    setUser,
    loading,
    setLoading,
    login,
    logout,
    sideBarActive,
    setSideBarActive,
  };

  return (
    <AdminContext.Provider value={adminData}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
