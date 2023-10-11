"use client";

import React, { useState } from "react";
import bcgPhoto from "../../images/Background-Contact-Form.jpg";
import Heading from "../Heading";
import Image from "next/image";
import instagram from "../../images/Instagram.svg";
import facebook from "../../images/Facebook.svg";
import * as yup from "yup";
import Link from "next/link";

export default function HomeContact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const validation = (obj) => {
    setSuccess(false);
    const findedErrors = [];

    if (obj.name.length <= 3) {
      findedErrors.push("Imię musi mieć długość min. 3 znaków");
    }
    if (obj.name.split(" ").length > 1) {
      findedErrors.push("Imię musi składać się z jednego wyrazu");
    }
    if (
      data.email.indexOf("@") === -1 ||
      data.email.lastIndexOf(".") < data.email.lastIndexOf("@")
    ) {
      findedErrors.push("Niepoprawny adres email");
    }
    if (data.message.length < 120) {
      findedErrors.push("Wiadomośc musi mieć długość min. 120 znaków");
    }

    setErrors(findedErrors);
  };

  // const dataSchema = yup.object().shape({
  //   name: yup.string().min(3),
  //   email: yup.string().email("must be a valid email"),
  //   message: yup.string().min(1).max(120),
  // });

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

    // console.log(dataSchema);
    // await dataSchema.validate(data).catch(function (err) {
    //   console.log(err.name);
    //   console.log(err.errors);
    // });
  };

  const handleChange = ({ target: { name, value } }) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div id="section-5" className="relative">
      <div
        className="h-screen flex justify-end items-center bg-cover bg-no-repeat bg-right md:bg-center before:block before:w-full before:h-full before:bg-white before:opacity-10 md:before:opacity-70"
        style={{
          backgroundImage: `url(${bcgPhoto.src})`,
        }}
      ></div>
      <div className="md:w-[40%] px-6 md:px-16 md:pr-0 lg:pr-16 inset-0 md:inset-auto md:inset-y-0  md:right-0 ">
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
                name="name"
                value={data.name}
                onChange={handleChange}
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
                name="email"
                value={data.email}
                onChange={handleChange}
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
              name="message"
              value={data.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="sumbit"
            className="text-2xl text-center border-text_color border border-solid w-[150px] self-end py-3 px-4"
            onClick={handleSubmit}
          >
            Wyślij
          </button>
          {errors.length !== 0 && (
            <ul
              className="bg-red-500 text-white p-4 font-bold text-sm
          "
            >
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
          {success && (
            <p className="bg-green-500 text-white p-2">Wysłano poprawnie</p>
          )}
        </form>
      </div>
      <footer className="px-20 md:px-36 w-full flex flex-col-reverse md:flex-row items-center md:justify-between">
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
