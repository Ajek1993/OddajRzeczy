import bgColumn from "../../images/3-Columns-Background.png";
import { merriweather } from "@/app/layout";

function Article({ num, title, description }) {
  return (
    <article className="flex flex-col justify-center items-center 2xl:mx-36 xl:mx-20 lg:mx-15 md:mx-10 mx-5 md:h-[350px]">
      <h2 className="text-[90px] text-accentTextColor font-light">{num}</h2>
      <h3 className="text-lg uppercase mb-7">{title}</h3>
      <p className={`${merriweather.variable} font-merri font-light `}>
        {description}
      </p>
    </article>
  );
}

export default function HomeThreeColumn() {
  return (
    <>
      <section
        className="h-full md:h-[384px] px-2 lg:px-16 py-8 md:p-0 bg-three-columns flex flex-col md:flex-row justify-around items-center text-center text-text_color"
        style={{ backgroundImage: `url(${bgColumn.src})` }}
      >
        <Article
          num={10}
          title={"Oddanych worków"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod rem architecto fugiat eveniet reiciendis et nisi illo! Odit, quam libero!"
          }
        />
        <Article
          num={5}
          title={"Wspartych oranizacji"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod rem architecto fugiat eveniet reiciendis et nisi illo! Odit, quam libero!"
          }
        />
        <Article
          num={7}
          title={"Zorganizowanych zbiórek"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod rem architecto fugiat eveniet reiciendis et nisi illo! Odit, quam libero!"
          }
        />
      </section>
    </>
  );
}
