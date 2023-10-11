import React from "react";
import YellowBaner from "../YellowBaner";
import StepBox from "./StepBox";
import StepButtons from "./StepButtons";
import StepForm from "./StepForm";

export default function Step1({ step, prev, next }) {
  return (
    <div>
      <YellowBaner>
        Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
        wiedzieć komu najlepiej je przekazać.
      </YellowBaner>

      <StepBox step={step}>
        <StepForm title={"Zaznacz co chcesz oddać:"}>
          <div className="flex flex-col gap-10 mt-8">
            <div className="relative">
              <input
                type="radio"
                id="good_clothes"
                name="thing"
                className="absolute -left-[210px] after:block after:bg-transparent after:border after:border-black checked:after:bg-yellow after:h-[40px] after:w-[40px] after:absolute after:left-[200px]"
              ></input>
              <label htmlFor="good_clothes" className="pl-14">
                ubrania, które nadają się do ponownego użycia
              </label>
            </div>
            <div className="relative">
              <input
                type="radio"
                id="bad_clothes"
                name="thing"
                className="absolute -left-[210px] after:block after:bg-transparent after:border after:border-black checked:after:bg-yellow after:h-[40px] after:w-[40px] after:absolute after:left-[200px]"
              ></input>
              <label htmlFor="bad_clothes" className="pl-14">
                ubrania, do wyrzucenia
              </label>
            </div>
            <div className="relative">
              <input
                type="radio"
                id="toys"
                name="thing"
                className="absolute -left-[210px]  after:block after:bg-transparent after:border after:border-black checked:after:bg-yellow after:h-[40px] after:w-[40px] after:absolute after:left-[200px]"
              ></input>
              <label htmlFor="toys" className="pl-14">
                zabawki
              </label>
            </div>
            <div className="relative">
              <input
                type="radio"
                id="books"
                name="thing"
                className="absolute -left-[210px]  after:block after:bg-transparent after:border after:border-black checked:after:bg-yellow after:h-[40px] after:w-[40px] after:absolute after:left-[200px]"
              ></input>
              <label htmlFor="books" className="pl-14">
                książki
              </label>
            </div>
            <div className="relative">
              <input
                type="radio"
                id="other"
                name="thing"
                className="absolute -left-[210px]  after:block after:bg-transparent after:border after:border-black checked:after:bg-yellow after:h-[40px] after:w-[40px] after:absolute after:left-[200px]"
              ></input>
              <label htmlFor="other" className="pl-14">
                inne
              </label>
            </div>
          </div>
        </StepForm>
        <StepButtons step={step} prev={prev} next={next} />
      </StepBox>
    </div>
  );
}
