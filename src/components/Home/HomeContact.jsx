"use client";

import React, { useState } from "react";
import bcgPhoto from "../../images/Background-Contact-Form.jpg";
import Heading from "../Heading";
import Image from "next/image";
import instagram from "../../images/Instagram.svg";
import facebook from "../../images/Facebook.svg";

export default function HomeContact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const validation = (obj) => {
    setSuccess(false);

    if (obj.name.length <= 3) {
      setErrors((prev) => ({
        ...prev,
        name: "Imię musi mieć długość min. 3 znaków",
      }));
    } else if (obj.name.split(" ").length > 1) {
      setErrors((prev) => ({
        ...prev,
        name: "Imię musi składać się z jednego wyrazu",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        name: "",
      }));
    }

    if (
      data.email.indexOf("@") === -1 ||
      data.email.lastIndexOf(".") < data.email.lastIndexOf("@")
    ) {
      setErrors((prev) => ({
        ...prev,
        email: "Niepoprawny adres email",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }
    if (data.message.length < 120) {
      setErrors((prev) => ({
        ...prev,
        message: "Wiadomość musi mieć długość min. 120 znaków",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        message: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validation(data);

    try {
      const response = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      response.ok &&
        setData({
          name: "",
          email: "",
          message: "",
        });

      response.ok && setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      id="section-5"
      className="relative bg-right md:bg-center bg-no-repeat bg-cover flex flex-col gap-12"
      style={{
        backgroundImage: `url(${bcgPhoto.src})`,
      }}
    >
      <div className="absolute h-full w-full top-0 md:left-0 bg-white/50"></div>
      <div className="relative md:w-[45%] lg:w=[40%] px-6 md:px-16 lg:pr-32 md:self-end">
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
                className={`outline-none py-1 border-b ${
                  errors.name ? "border-red-600" : "border-text_color"
                } border-solid placeholder:italic placeholder:opacity-50`}
                placeholder="Andrzej"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-600 text-xs font-bold mt-1">
                  {errors.name}
                </p>
              )}
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
                name="email"
                value={data.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-600 text-xs font-bold mt-1">
                  {errors.email}
                </p>
              )}
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
              placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae veniam ex. Necessitatibus totam voluptatibus impedit, numquam quo harum? Obcaecati! "
              cols={33}
              rows={6}
              name="message"
              value={data.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-600 text-xs font-bold mt-1">
                {errors.message}
              </p>
            )}
          </div>
          <button
            type="sumbit"
            className="text-2xl text-center border-text_color border border-solid w-[150px] self-end py-3 px-4"
            onClick={handleSubmit}
          >
            Wyślij
          </button>
          {/* {errors.length !== 0 && (
            <ul
              className="bg-red-500 text-white p-4 font-bold text-sm
          "
            >
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )} */}
          {success && (
            <p className="bg-green-500 text-white p-2">Wysłano poprawnie</p>
          )}
        </form>
      </div>
      <footer className="relative px-5 md:px-36 w-full flex flex-col-reverse md:flex-row items-center md:justify-between">
        <span></span>
        <p className="">Copyright by Arkadiusz Sarach</p>
        <div className="flex gap-4 ">
          <Image
            src={facebook}
            alt="facebook logo"
            width={30}
            height={30}
          ></Image>
          <Image src={instagram} alt="instagram logo" width={30} height={30} />
        </div>
      </footer>
    </div>
  );
}
