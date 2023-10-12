import React from "react";
import StepBox from "./StepBox";
import StepButtons from "./StepButtons";
import { useForm } from "@/providers/FormProvider";

export default function StepSummary({ step, prev }) {
  const { formData, setFormData } = useForm();

  const send = () => {
    alert("Dane zostały wysłane");
  };
  return (
    <StepBox>
      <h2 className="px-4 md:px-24 text-black text-4xl font-semibold">
        Podsumowanie Twojej darowizny
      </h2>
      <div className="px-4 md:px-24 text-2xl">
        <div>
          <h3 className="py-10 font-semibold">Oddajesz:</h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full xl:w-3/5 gap-12">
          <div className="flex flex-col gap-5">
            <h3 className="py-10 font-semibold">Adres odbioru:</h3>
            <div className="flex gap-4">
              <label htmlFor="street">Ulica:</label>
              <p>{formData.street}</p>
            </div>
            <div className="flex gap-4">
              <label htmlFor="city">Miasto:</label>
              <p>{formData.city}</p>
            </div>
            <div className="flex gap-4">
              <label htmlFor="code">Kod pocztowy:</label>
              <p>{formData.code}</p>
            </div>
            <div className="flex gap-4">
              <label htmlFor="phone">Telefon:</label>
              <p>{formData.phone}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="py-10 font-semibold">Termin odbioru:</h3>
            <div className="flex gap-4">
              <label htmlFor="date">Data:</label>
              <p>{formData.date}</p>
            </div>
            <div className="flex gap-4">
              <label htmlFor="hour">Godzina:</label>
              <p>{formData.hour}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <label htmlFor="message">Uwagi dla kuriera:</label>
              <p>{formData.message}</p>
            </div>
          </div>
        </div>
      </div>
      <StepButtons step={step} prev={prev} send={send} />
    </StepBox>
  );
}
