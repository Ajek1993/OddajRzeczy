"use client";
import React, { useState } from "react";
import YellowBaner from "../YellowBaner";
import StepBox from "./StepBox";
import StepButtons from "./StepButtons";
import StepForm from "./StepForm";

function Checkbox({ text }) {
  return (
    <div className="inline-block relative">
      <input
        // className={`h-[100%] w-[100%] absolute checked:hidden after:block after-w-[100%] after:h-[100%] after:bg-yellow after:content-['${text}'] after:px-6 after:py-2 after:border after:border-solid after:border-black`}
        className="checked:hidden"
        type="checkbox"
        name={`${text}`}
        id={`${text}`}
      />
      <label htmlFor={`${text}`}>
        <div className="px-6 py-2 inline-block border border-solid border-black">
          {text}
        </div>
      </label>
    </div>
  );
}

export default function Step3({ step, prev, next }) {
  return (
    <div>
      <YellowBaner>
        Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
        wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
        celu ich pomocy.
      </YellowBaner>
      <StepBox step={step}>
        <StepForm title={"Lokalizacja:"}>
          <div className="flex flex-col">
            <select
              defaultValue={"default"}
              className="bg-transparent border border-solid border-black w-[200px] text-2xl py-1 px-2 mt-4"
            >
              <option value="default" disabled hidden>
                --wybierz--
              </option>
              <option>Poznań</option>
              <option>Warszawa</option>
              <option>Kraków</option>
              <option>Wrocław</option>
              <option>Katowice</option>
            </select>
            <h3 className="py-10 font-semibold">Komu chcesz pomóc?</h3>
            <div className="flex flex-wrap w-full md:w-1/2 gap-4">
              <Checkbox text={"dzieciom"} />
              <Checkbox text={"samotnym matkom"} />
              <Checkbox text={"bezdomnym"} />
              <Checkbox text={"niepełnosprawnym"} />
              <Checkbox text={"osobom starszym"} />
            </div>
            <h3 className="py-10 font-semibold">
              Wpisz nazwę konkretnej organizacji (opcjonalnie)?
            </h3>
            <input
              type="text"
              name=""
              id=""
              className="w-full md:w-1/2 bg-transparent p-2 border border-solid border-black"
            />
          </div>
        </StepForm>
        <StepButtons step={step} prev={prev} next={next} />
      </StepBox>
    </div>
  );
}
