import FormProvider from "@/providers/FormProvider";
import React from "react";
import PrivateRoute from "@/components/PrivateRoute";

export default function layout({ children }) {
  return (
    <PrivateRoute>
      <FormProvider>{children}</FormProvider>
    </PrivateRoute>
  );
}
