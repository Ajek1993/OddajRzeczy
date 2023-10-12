import React from "react";
import YellowBaner from "../YellowBaner";
import StepBox from "./StepBox";
import StepButtons from "./StepButtons";
import StepForm from "./StepForm";
import { useForm } from "@/providers/FormProvider";

export default function Step2({ step, prev, next }) {
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
        Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak
        poprawnie spakować rzeczy znajdziesz TUTAJ.
      </YellowBaner>
      <StepBox step={step}>
        <StepForm
          title={"Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:"}
        >
          <div className="mt-12">
            <label>Liczba worków 60L:</label>
            <select
              name="bags"
              onChange={handleChange}
              defaultValue={formData.bags ? formData.bags : "default"}
              className="bg-transparent ml-12 border border-solid border-black w-[200px] text-2xl py-1 px-2"
            >
              <option value="default" disabled hidden>
                --wybierz--
              </option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </StepForm>
        <StepButtons step={step} prev={prev} next={next} />
      </StepBox>
    </div>
  );
}
