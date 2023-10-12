import React from "react";

export default function StepButtons({ step, prev, next, send }) {
  const handleClickPrev = () => {
    prev();
  };

  const handleClickNext = () => {
    next();
  };

  const handleSubmit = () => {
    send();
  };

  return (
    <div className="px-4 md:px-24 text-text_color text-2xl flex gap-8">
      {step > 1 && (
        <button
          className="w-[160px] text-2xl text-black mt-9 font-light text-center border-solid border-text_color border px-4 py-5"
          onClick={handleClickPrev}
        >
          Wróć
        </button>
      )}
      {step < 5 && (
        <button
          className="w-[160px] text-2xl text-black mt-9 font-light text-center border-solid border-text_color border px-4 py-5"
          onClick={handleClickNext}
        >
          Dalej
        </button>
      )}
      {step === 5 && (
        <button
          className="w-[250px] text-2xl text-black mt-9 font-light text-center border-solid border-text_color border px-4 py-5"
          onClick={handleSubmit}
        >
          Potwierdzam
        </button>
      )}
    </div>
  );
}
