import React from "react";
import bcgPhoto from "@/images/Background-Form.jpg";

export default function StepBox({ children, step }) {
  return (
    <div
      style={{ backgroundImage: `url(${bcgPhoto.src})` }}
      className="h-screen flex flex-col justify-between py-20"
    >
      <h3 className="px-24 text-2xl text-text_color">Krok {step}/4</h3>
      {children}
    </div>
  );
}
