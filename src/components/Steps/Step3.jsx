import React from "react";
import YellowBaner from "../YellowBaner";
import StepBox from "./StepBox";
import StepButtons from "./StepButtons";
import StepForm from "./StepForm";

export default function Step2({ step, prev, next }) {
  return (
    <div>
      <YellowBaner>
        Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
        wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
        celu ich pomocy.
      </YellowBaner>
      <StepBox step={step}>
        <StepForm title={"Lokalizacja:"}></StepForm>
        <StepButtons step={step} prev={prev} next={next} />
      </StepBox>
    </div>
  );
}
