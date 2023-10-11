import React from "react";
import YellowBaner from "../YellowBaner";

export default function Step1({ bcgPhoto, step, prev, next }) {
  return (
    <div>
      <YellowBaner
        text={
          "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
        }
      />
      <div
        style={{ backgroundImage: `url(${bcgPhoto.src})` }}
        className="h-screen flex flex-col justify-around"
      >
        <h3 className="px-24 text-2xl text-text_color">Krok 1/4</h3>
        <form className="px-4 md:px-24 text-2xl font-light">
          <label className="text-black text-4xl font-semibold">
            Zaznacz co chcesz oddać:
          </label>
          <div className="flex flex-col gap-10 mt-8">
            <div className="relative">
              <input
                type="radio"
                id="good_clothes"
                name="thing"
                className="absolute -left-[210px] after:block after:bg-transparent after:border after:border-black checked:after:bg-yellow after:h-[40px] after:w-[40px] after:absolute after:left-[200px]"
              ></input>
              <label htmlFor="good_clothes" className="pl-14">
                ubrania, które nadają się do ponownego użycia
              </label>
            </div>
            <div className="relative">
              <input
                type="radio"
                id="bad_clothes"
                name="thing"
                className="absolute -left-[210px]  after:block after:bg-transparent after:border after:border-black checked:after:bg-yellow after:h-[40px] after:w-[40px] after:absolute after:left-[200px]"
              ></input>
              <label htmlFor="bad_clothes" className="pl-14">
                ubrania, do wyrzucenia
              </label>
            </div>
            <div className="relative">
              <input
                type="radio"
                id="toys"
                name="thing"
                className="absolute -left-[210px]  after:block after:bg-transparent after:border after:border-black checked:after:bg-yellow after:h-[40px] after:w-[40px] after:absolute after:left-[200px]"
              ></input>
              <label htmlFor="toys" className="pl-14">
                zabawki
              </label>
            </div>
            <div className="relative">
              <input
                type="radio"
                id="books"
                name="thing"
                className="absolute -left-[210px]  after:block after:bg-transparent after:border after:border-black checked:after:bg-yellow after:h-[40px] after:w-[40px] after:absolute after:left-[200px]"
              ></input>
              <label htmlFor="books" className="pl-14">
                książki
              </label>
            </div>
            <div className="relative">
              <input
                type="radio"
                id="other"
                name="thing"
                className="absolute -left-[210px]  after:block after:bg-transparent after:border after:border-black checked:after:bg-yellow after:h-[40px] after:w-[40px] after:absolute after:left-[200px]"
              ></input>
              <label htmlFor="other" className="pl-14">
                inne
              </label>
            </div>
          </div>
        </form>
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
      </div>
    </div>
  );
}
