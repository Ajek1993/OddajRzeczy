"use client";
import Navigation from "@/components/Navigation";
import { useUser } from "@/providers/UserProvider";
import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { app } from "../../../firebase";
import { useRouter } from "next/navigation";

export default function page() {
  const { user } = useUser();
  console.log(user);
  const router = useRouter();

  const [name, setName] = useState("");

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        alert("Zaktualizowano dane");
        router.push("/panel");
      })
      .catch((error) => {});

    setName("");
  };

  return (
    <div className="flex flex-col items-center">
      <Navigation />
      <form>
        <div className="flex flex-col gap-5">
          <h3 className="pb-10 pt-20 font-semibold">
            Zaktualizuj dane użytkownika:
          </h3>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <label htmlFor="userName">Nazwa użytkownika</label>
            <input
              name="userName"
              value={name}
              onChange={handleChange}
              type="text"
              id="userName"
              className="bg-transparent p-1 border border-solid border-black"
            />
          </div>
        </div>
      </form>
      <button
        onClick={handleSave}
        className="w-[160px] text-2xl text-black mt-9 font-light text-center border-solid border-text_color border px-4 py-5"
      >
        Zapisz
      </button>
    </div>
  );
}
