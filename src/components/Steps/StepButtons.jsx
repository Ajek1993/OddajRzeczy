import React from "react";

export default function StepButtons({ step, next, prev }) {
  return (
    <div className="px-24 text-text_color text-2xl flex gap-8">
      {step > 1 && (
        <button
          className="w-[160px] text-2xl text-black mt-9 font-light text-center border-solid border-text_color border px-4 py-5"
          onClick={() => prev()}
        >
          Wróć
        </button>
      )}
      <button
        className="w-[160px] text-2xl text-black mt-9 font-light text-center border-solid border-text_color border px-4 py-5"
        onClick={() => next()}
      >
        Dalej
      </button>
    </div>
  );
}
