import Heading from "../Heading";
import Image from "next/image";
import icon1 from "../../images/Icon-1.svg";
import icon2 from "../../images/Icon-2.svg";
import icon3 from "../../images/Icon-3.svg";
import icon4 from "../../images/Icon-4.svg";
import BigButtons from "../BigButtons";

function Article({ icon, description, h4, p }) {
  return (
    <article className="mx-4 md:mx-8 my-8 lg:mx-12 xl:mx-16 flex flex-col justify-center items-center">
      <Image
        src={icon}
        alt={description}
        width={83}
        height={83}
        className="pb-5"
      />

      <h4 className="text-lg after:block after:h-[2px] after:w-[60px] after:bg-text_color after:mx-auto after:my-3">
        {h4}
      </h4>
      <p>{p}</p>
    </article>
  );
}

export default function HomeSimpleSteps() {
  return (
    <section id="section-2" className="pt-14 ">
      <Heading title={["Wystarczą 4 proste kroki"]} />
      <div className="bg-secondaryBcg">
        <div className="lg:container flex justify-around selection:md:justify-between flex-wrap md:flex-nowrap items-center justify-items-cente text-center text-text_color px-12 py-6 lg:px-32 lg:py-10">
          <Article
            icon={icon1}
            description={"icon 1"}
            h4={"Wybierz rzeczy"}
            p={"ubrania, zabawki, sprzęt, inne"}
          />
          <Article
            icon={icon2}
            description={"icon 2"}
            h4={"Spakuj je"}
            p={"skorzystaj z worków na śmieci"}
          />
          <Article
            icon={icon3}
            description={"icon 3"}
            h4={"Zdecyduj komu chcesz pomóc"}
            p={"wybierz zaufane miejsce"}
          />
          <Article
            icon={icon4}
            description={"icon 4"}
            h4={"Zamów kuriera"}
            p={"kurier przyjedzie w dogodnym terminie"}
          />
        </div>
      </div>
      <div className="flex justify-center mt-[35px]">
        <BigButtons text={"oddaj rzeczy"} address="/login" />
      </div>
    </section>
  );
}
