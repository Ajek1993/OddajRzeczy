import Link from "next/link";

export default function BigButtons({ text, address }) {
  return (
    <Link
      href={address}
      className="text-4xl font-light text-center text-text_color border-solid border border-text_color py-5 px-8 hover:bg-yellow duration-500"
      style={{ width: "310px" }}
    >
      {text.toUpperCase()}
    </Link>
  );
}
