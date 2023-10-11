"use client";
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import StepSummary from "./StepSummary";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function StepsContent() {
  const params = useParams();
  const router = useRouter();

  const handleNextPage = () => {
    if (+params.step === 5) return;
    router.push(`/oddaj-rzeczy/${++params.step}`, { scroll: false });
  };
  const handlePrevPage = () =>
    router.push(`/oddaj-rzeczy/${--params.step}`, { scroll: false });

  return (
    <>
      {+params.step === 1 && (
        <Step1
          prev={handlePrevPage}
          next={handleNextPage}
          step={+params.step}
        />
      )}
      {+params.step === 2 && (
        <Step2
          prev={handlePrevPage}
          next={handleNextPage}
          step={+params.step}
        />
      )}
      {+params.step === 3 && (
        <Step3
          prev={handlePrevPage}
          next={handleNextPage}
          step={+params.step}
        />
      )}
      {+params.step === 4 && (
        <Step4
          prev={handlePrevPage}
          next={handleNextPage}
          step={+params.step}
        />
      )}
      {+params.step === 5 && (
        <StepSummary
          prev={handlePrevPage}
          next={handleNextPage}
          step={+params.step}
        />
      )}
    </>
  );
}
