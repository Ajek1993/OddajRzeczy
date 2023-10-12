import React from "react";
import YellowBaner from "../YellowBaner";
import StepBox from "./StepBox";
import StepButtons from "./StepButtons";
import StepForm from "./StepForm";
import { useForm } from "@/providers/FormProvider";

function Checkbox({ text, id }) {
  const { formData, setFormData } = useForm();

  // const handleCheck = ({ target: { name, value, checked } }) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     whoHelp: checked
  //       ? [...formData.whoHelp.filter((el) => el !== value), value]
  //       : [...formData.whoHelp.filter((el) => el !== value)],
  //   }));
  // };

  const handleChange = ({ target: { name, value, checked } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="relative">
      <input
        checked={formData.thing === `${text}` && "checked"}
        value={text}
        onChange={handleChange}
        type="radio"
        id={id}
        name="thing"
        className="absolute -left-[210px] after:block after:bg-transparent after:border after:border-black checked:after:bg-yellow after:h-[40px] after:w-[40px] after:absolute after:left-[200px]"
      ></input>
      <label htmlFor={id} className="pl-14">
        {text}
      </label>
    </div>
  );
}

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
            <Checkbox
              text={"ubrania, które nadają się do ponownego użycia"}
              id={"good_clothes"}
            />
            <Checkbox text={"ubrania, do wyrzucenia"} id={"bad_clothes"} />
            <Checkbox text={"zabawki"} id={"toys"} />
            <Checkbox text={"książki"} id={"books"} />
            <Checkbox text={"inne"} id={"other"} />
          </div>
        </StepForm>
        <StepButtons step={step} prev={prev} next={next} />
      </StepBox>
    </div>
  );
}
