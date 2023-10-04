import Image from "next/image";
import headerImg from "../../images/Home-Hero-Image.jpg";
import Link from "next/link";
import Heading from "../Heading";
import BigButtons from "../BigButtons";

export default function HomeHeader() {
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
        <nav className="bottomNav flex items-center justify-end gap-6 text-lg text-text_color mt-6">
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
      <header className="container flex flex-row justify-between h-screen">
        <div>
          <Image
            alt="box with a lot of things"
            src={headerImg}
            className="md: absolute md:-left-483px top-0"
          />
        </div>
        <div className="w-1/2 text-4xl text-center flex flex-col justify-center items-center">
          <Heading
            title={[
              "Zacznij pomagać!",
              "Oddaj niechciane rzeczy w zaufane ręce",
            ]}
          />
          <div className="flex gap-10 mt-6">
            <BigButtons text={"oddaj rzeczy"} address="/login" />
            <BigButtons text={"zorganizuj zbiórkę"} address="/login" />
          </div>
        </div>
      </header>
    </>
  );
}
