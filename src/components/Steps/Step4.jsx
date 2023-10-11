import React from "react";
import YellowBaner from "../YellowBaner";
import StepBox from "./StepBox";
import StepButtons from "./StepButtons";
import StepForm from "./StepForm";

export default function Step4({ step, prev, next }) {
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
                  type="text"
                  id="street"
                  className="bg-transparent p-1 border border-solid border-black"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="city">Miasto</label>
                <input
                  type="text"
                  id="city"
                  className="bg-transparent p-1 border border-solid border-black"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="code">Kod pocztowy</label>
                <input
                  type="text"
                  id="code"
                  className="bg-transparent p-1 border border-solid border-black"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="phone">Numer telefonu</label>
                <input
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
                  type="date"
                  id="date"
                  className="bg-transparent p-1 border border-solid border-black"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="hour">Godzina</label>
                <input
                  type="time"
                  id="hour"
                  className="bg-transparent p-1 border border-solid border-black"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="message">Uwagi dla kuriera</label>
                <textarea
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
