import bgColumn from "../../images/3-Columns-Background.png";
import { merriweather } from "@/app/layout";

export default function HomeThreeColumn() {
  return (
    <>
      <section className="h-full md:h-[384px] bg-yellow bg-three-columns flex flex-col md:flex-row justify-around items-center text-center text-text_color">
        <article className="flex flex-col justify-center items-center 2xl:mx-36 xl:mx-20 lg:mx-15 md:mx-10 mx-5">
          <h2 className="text-[90px] text-accentTextColor font-light">10</h2>
          <h3 className="text-lg uppercase mb-7">Oddanych worków</h3>
          <p className={`${merriweather.variable} font-merri font-light `}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod rem
            architecto fugiat eveniet reiciendis et nisi illo! Odit, quam
            libero!
          </p>
        </article>
        <article className="flex flex-col justify-center items-center 2xl:mx-36 xl:mx-20 lg:mx-15 md:mx-10 mx-5">
          <h2 className="text-[90px] text-accentTextColor font-light">5</h2>
          <h3 className="text-lg uppercase mb-7">Wspartych organizacji</h3>
          <p className={`${merriweather.variable} font-merri font-light `}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod rem
            architecto fugiat eveniet reiciendis et nisi illo! Odit, quam
            libero!
          </p>
        </article>
        <article className="flex flex-col justify-center items-center 2xl:mx-36 xl:mx-20 lg:mx-15 md:mx-10 mx-5">
          <h2 className="text-[90px] text-accentTextColor font-light">7</h2>
          <h3 className="text-lg uppercase mb-7">Zorganizowanych zbiórek</h3>
          <p className={`${merriweather.variable} font-merri font-light `}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod rem
            architecto fugiat eveniet reiciendis et nisi illo! Odit, quam
            libero!
          </p>
        </article>
      </section>
    </>
  );
}
