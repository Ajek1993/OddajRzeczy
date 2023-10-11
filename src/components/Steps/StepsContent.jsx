"use client";
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import StepSummary from "./StepSummary";
import bcgPhoto from "@/images/Background-Form.jpg";

export default function StepsContent() {
  const [step, setStep] = useState(1);

  const handleNextPage = () => {
    if (step === 5) return;
    setStep((prev) => prev + 1);
  };
  const handlePrevPage = () => setStep((prev) => prev - 1);

  return (
    <>
      {step === 1 && (
        <Step1
          bcgPhoto={bcgPhoto}
          prev={handlePrevPage}
          next={handleNextPage}
          step={step}
        />
      )}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <StepSummary />}

      <div className="">StepsContent: {step}</div>
    </>
  );
}
