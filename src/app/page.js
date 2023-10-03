import Link from "next/link";
import { merriweather } from "./layout";

export default function Home() {
  return (
    <>
      <header className="flex justify-between bg-yellow">
        <div>Home Page</div>
        <nav>
          <ul>
            <Link
              className={`${merriweather.variable} font-merri text-black`}
              href="/new"
            >
              New
            </Link>
          </ul>
          <ul>
            <Link className="font-merri text-accentTextColor" href="/new2">
              New2
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
