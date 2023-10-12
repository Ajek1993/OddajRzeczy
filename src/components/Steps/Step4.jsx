import React, { useEffect, useState } from "react";
import YellowBaner from "../YellowBaner";
import StepBox from "./StepBox";
import StepButtons from "./StepButtons";
import StepForm from "./StepForm";
import { useForm } from "@/providers/FormProvider";

export default function Step4({ step, prev, next }) {
  const { formData, setFormData } = useForm();

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <YellowBaner>Podaj adres oraz termin odbioru rzeczy.</YellowBaner>
      <StepBox step={step}>
        <StepForm title={"Podaj adres oraz termin odbioru rzecz przez kuriera"}>
          <div className="flex flex-col lg:flex-row flex-justify-between w-full xl:w-3/5 gap-12">
            <div className="flex flex-col gap-5">
              <h3 className="py-10 font-semibold">Adres odbioru:</h3>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="street">Ulica</label>
                <input
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  type="text"
                  id="street"
                  className="bg-transparent p-1 border border-solid border-black"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="city">Miasto</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  type="text"
                  id="city"
                  className="bg-transparent p-1 border border-solid border-black"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="code">Kod pocztowy</label>
                <input
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  type="text"
                  id="code"
                  className="bg-transparent p-1 border border-solid border-black"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="phone">Numer telefonu</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="number"
                  id="phone"
                  className="bg-transparent p-1 border border-solid border-black"
                  min={0}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="py-10 font-semibold">Termin odbioru:</h3>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="date">Data</label>
                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  type="date"
                  id="date"
                  className="bg-transparent p-1 border border-solid border-black"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="hour">Godzina</label>
                <input
                  name="hour"
                  value={formData.hour}
                  onChange={handleChange}
                  type="time"
                  id="hour"
                  className="bg-transparent p-1 border border-solid border-black"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="message">Uwagi dla kuriera</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  type="text"
                  id="message"
                  className="bg-transparent p-1 border border-solid border-black"
                  rows={10}
                  style={{ resize: "none" }}
                />
              </div>
            </div>
          </div>
        </StepForm>
        <StepButtons step={step} prev={prev} next={next} />
      </StepBox>
    </div>
  );
}
