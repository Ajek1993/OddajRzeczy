import Link from "next/link";

export default function BigButtons({ text }) {
  return (
    <Link
      href={"/"}
      className="text-4xl font-light text-text_color border-solid border border-text_color py-5 px-8"
      style={{ width: "310px" }}
    >
      {text.toUpperCase()}
    </Link>
  );
}
