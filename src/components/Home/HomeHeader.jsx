import Image from "next/image";
import headerImg from "../../images/Home-Hero-Image.jpg";
import Link from "next/link";
import Heading from "../Heading";
import BigButtons from "../BigButtons";

export default function HomeHeader() {
  console.log(headerImg);
  return (
    <>
      <div className="navigations container flex flex-col justify-end">
        <nav className="upperNav flex items-center justify-end gap-4 text-sm text-signIn_signOnBtn mt-9">
          <Link href="/login">Zaloguj</Link>
          <Link
            href="/register"
            className="border-solid border border-yellow py-2 px-3 hover:bg-secondaryBcg"
          >
            Załóż konto
          </Link>
        </nav>
        <nav className="bottomNav flex flex-col md:flex-row items-center justify-end gap-6 text-lg text-text_color mt-6">
          <Link
            href="#section-1"
            className="border-solid border border-text_color py-2 px-5"
          >
            Start
          </Link>
          <Link href="#section-2">O co chodzi?</Link>
          <Link href="#section-3">O nas</Link>
          <Link href="#section-4">Refundacja i organizacje</Link>
          <Link href="#section-5">Kontakt</Link>
        </nav>
      </div>
      <header className="flex flex-col-reverse md:flex-row justify-between h-screen mt-8 ">
        <div
          style={{
            backgroundImage: `url(${headerImg.src})`,
          }}
          className="w-full h-full bg-center bg-cover bg-no-repeat md:bg-[-483px] md:h-auto md:w-[45%] "
        ></div>
        <div
          id="section-1"
          className="w-full md:w-[55%] flex flex-col justify-center items-center gap-5 px-8"
        >
          <Heading
            title={[
              "Zacznij pomagać!",
              "Oddaj niechciane rzeczy w zaufane ręce",
            ]}
          />
          <div className="flex flex-wrap justify-center gap-10 my-6">
            <BigButtons text={"oddaj rzeczy"} address="/login" />
            <BigButtons text={"zorganizuj zbiórkę"} address="/login" />
          </div>
        </div>
      </header>
    </>
  );
}
