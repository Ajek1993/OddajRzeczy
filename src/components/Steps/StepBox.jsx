import React from "react";
import bcgPhoto from "@/images/Background-Form.jpg";

export default function StepBox({ children, step }) {
  return (
    <div
      style={{ backgroundImage: `url(${bcgPhoto.src})` }}
      className="h-full lg:h-screen flex flex-col justify-between py-10 md:py-20"
    >
      {step < 5 && (
        <h3 className="px-24 pb-8 text-2xl text-text_color">Krok {step}/4</h3>
      )}
      {children}
    </div>
  );
}
