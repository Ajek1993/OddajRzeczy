"use client";
import { addDoc, collection, doc, setDoc } from "firebase/firestore/lite";
import React, { createContext, useContext, useState } from "react";
import { db } from "../../firebase";
import { useUser } from "./UserProvider";

const FormContext = createContext(null);

export default function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    thing: "",
    bags: "",
    localization: "",
    whoHelp: [],
    organization: "",
    street: "",
    city: "",
    code: "",
    phone: "",
    date: "",
    hour: "",
    message: "",
  });

  const { user } = useUser();

  const sendForm = async () => {
    await setDoc(doc(db, "forms", user.uid), formData);
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, sendForm }}>
      {children}
    </FormContext.Provider>
  );
}

export const useForm = () => useContext(FormContext);
