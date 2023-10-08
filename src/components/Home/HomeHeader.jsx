import headerImg from "../../images/Home-Hero-Image.jpg";
import Heading from "../Heading";
import BigButtons from "../BigButtons";
import Navigation from "../Navigation";

export default function HomeHeader() {
  return (
    <>
      <Navigation />
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
