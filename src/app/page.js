import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between bg-slate-500">
        <div>Home Page</div>
        <nav>
          <ul>
            <Link className="font-merri text-blue-100" href="/new">
              New
            </Link>
          </ul>
          <ul>
            <Link className="font-merri text-blue-100" href="/new2">
              New2
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
