import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { app } from "./../../firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

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

      if (loggedInUser) {
        axios
          .post("http://localhost:5000/jwt", {
            email: loggedInUser.email,
          })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            console.log(data);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }

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
