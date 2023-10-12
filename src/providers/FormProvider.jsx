"use client";
import React, { createContext, useContext, useState } from "react";

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

  console.log(formData);
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export const useForm = () => useContext(FormContext);
