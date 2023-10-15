import React from "react";
import { useForm } from "@/providers/FormProvider";
import { usePathname } from "next/navigation";

export default function StepButtons({ step, prev, next, send }) {
  const { formData, setFormData } = useForm();
  const pathname = usePathname();

  const handleClickPrev = () => {
    prev();
  };

  const handleClickNext = () => {
    if (!formData.thing && pathname === "/oddaj-rzeczy/1") {
      alert("Musisz zaznaczyć jedną z opcji");
      return;
    }
    if (!formData.bags && pathname === "/oddaj-rzeczy/2") {
      alert("Musisz zaznaczyć jedną z opcji");
      return;
    }
    if (!formData.localization && pathname === "/oddaj-rzeczy/3") {
      alert("Musisz wybrać lokalizację");
      return;
    }
    if (formData.whoHelp.length === 0 && pathname === "/oddaj-rzeczy/3") {
      alert("Musisz wybrać przynajmniej jedną z opcji");
      return;
    }
    if (
      (!formData.street ||
        !formData.city ||
        !formData.code ||
        !formData.phone ||
        !formData.date ||
        !formData.hour) &&
      pathname === "/oddaj-rzeczy/4"
    ) {
      alert("Wprowadź poprawnie wszystkie dane");
      return;
    }
    next();
  };

  const handleSubmit = () => {
    setFormData({
      thing: "",
      bags: "",
      localization: "",
      whoHelp: [],
      organization: "",
      street: "",
      city: "",
      code: "",
      phone: "",
      date: "",
      hour: "",
      message: "",
    });
    send();
    next();
  };

  return (
    <div className="px-4 md:px-24 text-text_color text-2xl flex gap-8">
      {step > 1 && (
        <button
          className="w-[160px] text-2xl text-black mt-9 font-light text-center border-solid border-text_color border px-4 py-5"
          onClick={handleClickPrev}
        >
          Wróć
        </button>
      )}
      {step < 5 && (
        <button
          className="w-[160px] text-2xl text-black mt-9 font-light text-center border-solid border-text_color border px-4 py-5"
          onClick={handleClickNext}
        >
          Dalej
        </button>
      )}
      {step === 5 && (
        <button
          className="w-[250px] text-2xl text-black mt-9 font-light text-center border-solid border-text_color border px-4 py-5"
          onClick={handleSubmit}
        >
          Potwierdzam
        </button>
      )}
    </div>
  );
}
