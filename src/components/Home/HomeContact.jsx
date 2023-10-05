"use client";

import React from "react";
import bcgPhoto from "../../images/Background-Contact-Form.jpg";
import Heading from "../Heading";
import Image from "next/image";
import instagram from "../../images/Instagram.svg";
import facebook from "../../images/Facebook.svg";

export default function HomeContact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="section-4" className="relative">
      <div
        className="h-screen flex justify-end items-center bg-cover bg-no-repeat bg-right md:bg-center before:block before:w-full before:h-full before:bg-white before:opacity-10 md:before:opacity-70"
        style={{
          backgroundImage: `url(${bcgPhoto.src})`,
        }}
      ></div>
      <div className="md:w-[40%] px-6 md:px-16 md:pr-0 lg:pr-16 absolute inset-0 md:inset-auto md:inset-y-0  md:right-0 ">
        <Heading title={["Skontaktuj się z nami"]} />
        <form className="flex flex-col gap-6 text-text_color ">
          <div className="flex flex-col lg:flex-row justify-center gap-2">
            <div className="flex flex-col lg:w-1/2">
              <label htmlFor="name" className="font-semibold my-2">
                Wpisz swoje imię
              </label>
              <input
                style={{
                  background: "transparent",
                }}
                type="text"
                id="name"
                className="outline-none py-1 border-b border-text_color border-solid placeholder:italic placeholder:opacity-50"
                placeholder="Andrzej"
              />
            </div>
            <div className="flex flex-col lg:w-1/2">
              <label htmlFor="email" className="font-semibold my-2">
                Wpisz swój email
              </label>
              <input
                style={{ background: "transparent" }}
                type="email"
                id="email"
                className="outline-none py-1  border-b border-text_color border-solid placeholder:italic placeholder:opacity-50"
                placeholder="krzysztof.s@gmail.com"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="mnessage" className="font-semibold my-2 py-1">
              Wpisz swoją wiadomosć
            </label>
            <textarea
              style={{ background: "transparent", resize: "none" }}
              type="text"
              id="message"
              className="w-full outline-none  border-b border-text_color border-solid placeholder:italic placeholder:opacity-50"
              placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae veniam ex. Necessitatibus totam voluptatibus impedit, numquam quo harum? Obcaecati! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae veniam ex. Necessitatibus totam voluptatibus impedit, numquam quo harum? Obcaecati!"
              cols={33}
              rows={6}
            />
          </div>
          <button
            type="sumbit"
            className="text-2xl text-center border-text_color border border-solid w-[150px] self-end py-3 px-4"
            onClick={handleSubmit}
          >
            Wyślij
          </button>
        </form>
      </div>
      <footer className="px-36 w-full absolute bottom-0 flex justify-between">
        <span></span>
        <p className="">Copyright by Arkadiusz Sarach</p>
        <div className="flex gap-4 ">
          <Image src={facebook} alt="facebook logo" width={30} height={30} />
          <Image src={instagram} alt="instagram logo" width={30} height={30} />
        </div>
      </footer>
    </div>
  );
}
