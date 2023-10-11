import React, { Children } from "react";

export default function StepForm({ children, title }) {
  return (
    <form className="px-4 md:px-24 text-2xl font-light">
      <label className="text-black text-4xl font-semibold">{title}</label>
      {children}
    </form>
  );
}
