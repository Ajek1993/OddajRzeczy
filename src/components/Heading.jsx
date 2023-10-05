import Image from "next/image";
import decorationImg from "../images/Decoration.svg";

export default function Heading({ title }) {
  return (
    <div className="flex flex-col justify-center items-center">
      {title.map((text) => {
        return (
          <h2 className="mt-3 text-[38px] text-center" key={text}>
            {text}
          </h2>
        );
      })}

      <Image className="my-8" alt="decoration" src={decorationImg} />
    </div>
  );
}
