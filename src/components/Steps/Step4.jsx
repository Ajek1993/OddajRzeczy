import React from "react";
import YellowBaner from "../YellowBaner";
import StepBox from "./StepBox";
import StepButtons from "./StepButtons";
import StepForm from "./StepForm";

export default function Step2({ step, prev, next }) {
  return (
    <div>
      <YellowBaner>Podaj adres oraz termin odbioru rzeczy.</YellowBaner>
      <StepBox step={step}>
        <StepForm
          title={"Podaj adres oraz termin odbioru rzecz przez kuriera"}
        />
        <StepButtons step={step} prev={prev} next={next} />
      </StepBox>
    </div>
  );
}
