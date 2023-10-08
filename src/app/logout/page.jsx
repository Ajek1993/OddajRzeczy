import Link from "next/link";
import Heading from "@/components/Heading";
import Navigation from "@/components/Navigation";

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <Navigation />
      <div className="mt-24">
        <Heading title={["Wylogowanie nastąpiło pomyślnie"]} />
      </div>

      <Link
        href="/"
        className="w-[160px] text-lg text-black mt-9 font-light text-center border-solid border-text_color border px-4 py-3"
      >
        Strona główna
      </Link>
    </div>
  );
}
