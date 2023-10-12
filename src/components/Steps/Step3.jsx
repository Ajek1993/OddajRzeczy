import React, { useState } from "react";
import YellowBaner from "../YellowBaner";
import StepBox from "./StepBox";
import StepButtons from "./StepButtons";
import StepForm from "./StepForm";
import { useForm } from "@/providers/FormProvider";

function Checkbox({ text }) {
  const { formData, setFormData } = useForm();

  const handleCheck = ({ target: { name, value, checked } }) => {
    setFormData((prev) => ({
      ...prev,
      whoHelp: checked
        ? [...formData.whoHelp.filter((el) => el !== value), value]
        : [...formData.whoHelp.filter((el) => el !== value)],
    }));
  };
  return (
    <div className="inline-block relative">
      <input
        // className={`h-[100%] w-[100%] absolute checked:hidden after:block after-w-[100%] after:h-[100%] after:bg-yellow after:content-['${text}'] after:px-6 after:py-2 after:border after:border-solid after:border-black`}
        className="checked:hidden"
        type="checkbox"
        checked={formData.whoHelp.includes(`${text}`) && "checked"}
        name={`${text}`}
        id={`${text}`}
        value={`${text}`}
        onChange={handleCheck}
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
  const { formData, setFormData } = useForm();

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
              name="localization"
              onChange={handleChange}
              defaultValue={
                formData.localization ? formData.localization : "default"
              }
              className="bg-transparent border border-solid border-black w-[200px] text-2xl py-1 px-2 mt-4"
            >
              <option value="default" disabled hidden>
                --wybierz--
              </option>
              <option value={"Poznań"}>Poznań</option>
              <option value={"Warszawa"}>Warszawa</option>
              <option value={"Kraków"}>Kraków</option>
              <option value={"Wrocław"}>Wrocław</option>
              <option value={"Katowice"}>Katowice</option>
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
              value={formData.organization}
              onChange={handleChange}
              type="text"
              name="organization"
              id="organization"
              className="w-full md:w-1/2 bg-transparent p-2 border border-solid border-black"
            />
          </div>
        </StepForm>
        <StepButtons step={step} prev={prev} next={next} />
      </StepBox>
    </div>
  );
}
