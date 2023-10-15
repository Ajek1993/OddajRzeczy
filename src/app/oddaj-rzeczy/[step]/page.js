import Steps from "@/components/Steps/Steps";
import React from "react";
import PrivateRoute from "@/components/PrivateRoute";

export default function page() {
  return (
    <PrivateRoute>
      <Steps />
    </PrivateRoute>
  );
}
