import Image from "next/image";
import decorationImg from "../../public/Decoration.svg";

export default function Heading({ title }) {
  return (
    <>
      {title.map((text) => {
        return (
          <h2 className="mt-3" key={text}>
            {text}
          </h2>
        );
      })}

      <Image className="mt-5" alt="decoration" src={decorationImg} />
    </>
  );
}
