import React from "react";
import Heading from "@/components/Heading";
import Navigation from "@/components/Navigation";
import bcgPhoto from "@/images/Form-Hero-Image.jpg";

export default function StepsHeader() {
  return (
    <div className="relative text-text_color">
      <header className="flex flex-col md:flex-row justify-end">
        <div
          style={{
            backgroundImage: `url(${bcgPhoto.src})`,
          }}
          className="hidden md:block md:absolute top-0 left-0 bg-cover bg-no-repeat md:h-full md:w-[30%] lg:w-[40%] xl:w-[50%] "
        ></div>
        <div className="w-full md:w-[65%] lg:w-[55%] xl:w-[50%] flex flex-col justify-start items-center gap-5 px-24 md:h-screen">
          <Navigation />
          <Heading title={["Oddaj rzeczy, których nie chcesz POTRZEBUJĄCYM"]} />
          <p className="font-light text-[40px] text-center">
            Wystarczą 4 proste kroki
          </p>
          <div className="flex flex-col md:flex-row mt-12 gap-20 md:gap-6 font-light scale-75 xl:scale-100">
            <div className="w-[150px] h-[150px] border border-text_color border-solid flex flex-col justify-around items-start rotate-45">
              <p className="-rotate-45 text-[32px] pl-[15px]">1</p>
              <p className="-rotate-45 text-[22px] w-1/2 pl-[40px]">
                Wybierz rzeczy
              </p>
            </div>
            <div className="w-[150px] h-[150px] border border-text_color border-solid flex flex-col justify-around items-start rotate-45">
              <p className="-rotate-45 text-[32px] pl-[15px]">2</p>
              <p className="-rotate-45 text-[22px] w-1/2 pl-[45px]">
                Spakuj worki
              </p>
            </div>
            <div className="w-[150px] h-[150px] border border-text_color border-solid flex flex-col justify-around items-start rotate-45">
              <p className="-rotate-45 text-[32px] pl-[15px]">3</p>
              <p className="-rotate-45 text-[22px] w-1/2 pl-[40px]">
                Wybierz fundację
              </p>
            </div>
            <div className="w-[150px] h-[150px] border border-text_color border-solid flex flex-col justify-around items-start rotate-45">
              <p className="-rotate-45 text-[32px] pl-[15px]">4</p>
              <p className="-rotate-45 text-[22px] w-1/2 pl-[40px]">
                Zamów kuriera
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
