"use client";

import { NextUIProvider } from "@nextui-org/react";

export default function NextProvider({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
