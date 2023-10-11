import React from "react";
import YellowBaner from "../YellowBaner";
import StepBox from "./StepBox";
import StepButtons from "./StepButtons";
import StepForm from "./StepForm";

export default function Step2({ step, prev, next }) {
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
            <select className="bg-transparent ml-12 border border-solid border-black w-[200px]">
              <option
                style={{ value: "", selected: "", disabled: "", hidden: "" }}
              >
                --wybierz--
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </StepForm>
        <StepButtons step={step} prev={prev} next={next} />
      </StepBox>
    </div>
  );
}
