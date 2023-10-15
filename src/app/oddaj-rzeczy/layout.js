import FormProvider from "@/providers/FormProvider";
import React from "react";

export default function layout({ children }) {
  return <FormProvider>{children}</FormProvider>;
}
