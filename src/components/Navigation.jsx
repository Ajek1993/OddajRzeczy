import Link from "next/link";

const styleLink =
  "border-white border-solid border hover:border-text_color hover:bg-secondaryBcg duration-500 rounded py-2 px-5";

export default function Navigation() {
  return (
    <div className="navigations container flex flex-col justify-end ">
      <nav className="upperNav flex items-center justify-end gap-4 text-sm text-signIn_signOnBtn mt-9">
        <Link href="/login">Zaloguj</Link>
        <Link
          href="/register"
          className="border-solid border border-yellow py-2 px-3 hover:bg-secondaryBcg"
        >
          Załóż konto
        </Link>
      </nav>
      <nav className="bottomNav flex flex-col md:flex-row items-center justify-end gap-6 text-lg text-text_color text-center mt-6">
        <Link href="/" className={styleLink}>
          Start
        </Link>
        <Link href="/#section-2" className={styleLink}>
          O co chodzi?
        </Link>
        <Link href="/#section-3" className={styleLink}>
          O nas
        </Link>
        <Link href="/#section-4" className={styleLink}>
          Refundacja i organizacje
        </Link>
        <Link href="/#section-5" className={styleLink}>
          Kontakt
        </Link>
      </nav>
    </div>
  );
}
