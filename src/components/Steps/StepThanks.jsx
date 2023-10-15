import React from "react";
import StepBox from "./StepBox";
import Heading from "../Heading";

export default function StepThanks() {
  return (
    <StepBox>
      <div className="flex lg:w-1/2 h-[100%] items-center p-4 lg:p-20">
        <Heading
          title={[
            "Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze",
          ]}
        />
      </div>
    </StepBox>
  );
}
