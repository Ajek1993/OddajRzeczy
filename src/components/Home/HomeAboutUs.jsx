import Heading from "../Heading";
import people from "../../images/People.jpg";

export default function HomeAboutUs() {
  return (
    <section
      id="section-3"
      className="flex flex-col md:flex-row justify-between text-text_color"
    >
      <div className="md:w-1/2 p-20 lg:px-36 lg:py-44 flex flex-col justify-center items-center bg-secondaryBcg">
        <Heading title={["O nas"]} />
        <p className="text-base lg:text-3xl text-center leading-relaxed ">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
      </div>
      <div
        className="md:w-1/2 h-[600px] md:h-auto"
        style={{
          backgroundImage: `url(${people.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  );
}
