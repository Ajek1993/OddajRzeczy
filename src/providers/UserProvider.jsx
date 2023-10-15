"use client";
import React, { createContext, useContext, useState } from "react";
import { db, app } from "../../firebase.js";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(false);

  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      console.log(user);
    } else {
      setUser(null);
    }
  });

  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        // alert("Wylogowano pomyślnie");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
