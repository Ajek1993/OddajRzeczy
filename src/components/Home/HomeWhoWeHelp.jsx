"use client";

import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import data from "./data";

function MiddleButton({ text, id, activeColumn, change }) {
  return (
    <button
      className={`w-[90%] md:w-[250px] text-2xl text-center  ${
        id === activeColumn
          ? " border-text_color border border-solid"
          : 'border-white border border-solid"'
      }   py-5 px-8`}
      onClick={change}
    >
      {text}
    </button>
  );
}

export default function HomeWhoWeHelp() {
  const [activeColumn, setActiveColumn] = useState("fundacje");
  const [page, setPage] = useState(1);

  const category = data.find((el) => el.id === activeColumn);
  const arrLength = category.entities.length;
  const numsOfPaginationButtons = Math.ceil(arrLength / 3);
  const nums = [];
  for (let i = 1; i <= numsOfPaginationButtons; i++) {
    nums.push(i);
  }

  const handleChange = (num) => {
    setActiveColumn(num);
    setPage(1);
  };

  const handlePage = (num) => {
    setPage(num);
  };

  return (
    <section
      id="section-4"
      className="mt-8 flex flex-col justify-center items-center text-text_color"
    >
      <Heading title={["Komu pomagamy?"]} />
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <MiddleButton
          text={"Fundacjom"}
          id={"fundacje"}
          activeColumn={activeColumn}
          change={() => handleChange("fundacje")}
        />
        <MiddleButton
          text={"Organizacjom pozarządowym"}
          id={"organizacje"}
          activeColumn={activeColumn}
          change={() => handleChange("organizacje")}
        />
        <MiddleButton
          text={"Lokalnym zbiórkom"}
          id={"zbiórki"}
          activeColumn={activeColumn}
          change={() => handleChange("zbiórki")}
        />
      </div>
      <p className="text-center text-lg md:text-[22px] md:w-[640px] pt-16 pb-4">
        {category.description}
      </p>
      <div className="w-full px-4 md:px-28">
        {category.entities
          .slice(page * 3 - 3, page * 3)
          .map(({ name, id, description, items }) => {
            return (
              <div
                key={id}
                className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 border-b border-text_color py-6"
              >
                <div>
                  <h2 className="text-[26px]">{name}</h2>
                  <p className="text-lg">{description}</p>
                </div>
                <div className="flex md:justify-center md:items-center">
                  {items.join(", ")}
                </div>
              </div>
            );
          })}
      </div>
      <div className="buttons flex justify-center items-center gap-8 m-12 text-lg">
        {numsOfPaginationButtons !== 1 &&
          nums.map((num) => (
            <button
              className={`text-2xl text-center  ${
                page === num
                  ? " border-text_color border border-solid"
                  : 'border-white border border-solid"'
              }   py-3 px-4`}
              key={num}
              onClick={() => handlePage(num)}
            >
              {num}
            </button>
          ))}
      </div>
    </section>
  );
}
