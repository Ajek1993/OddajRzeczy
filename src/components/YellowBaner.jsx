import React from "react";

export default function YellowBaner({ text }) {
  return (
    <div className=" bg-yellow p-4 md:p-24 flex flex-col justify-center">
      <h2 className="text-black text-4xl font-semibold">WAŻNE!</h2>
      <p className="text-text_color text-[22px]">{text}</p>
    </div>
  );
}
