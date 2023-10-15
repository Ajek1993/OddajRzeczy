"use client";
import Link from "next/link";
import { CircularProgress } from "@nextui-org/react";
import { useUser } from "@/providers/UserProvider";

const styleLink =
  "border-white border-solid border hover:border-text_color hover:bg-secondaryBcg duration-500 rounded py-2 px-5";

export default function Navigation() {
  const { user, handleLogout } = useUser();

  const getUser = () => {
    switch (user) {
      case false:
        return <CircularProgress aria-label="Loading..." />;
      case null:
        return (
          <>
            <Link href="/login">Zaloguj</Link>
            <Link
              href="/register"
              className="border-solid border border-yellow py-2 px-3 hover:bg-secondaryBcg"
            >
              Załóż konto
            </Link>
          </>
        );
      default:
        return (
          <>
            <p className="font-semibold">{`Witaj, ${user.email} !`}</p>
            <Link
              href="/oddaj-rzeczy/1"
              className="border-solid border border-yellow py-2 px-3 hover:bg-secondaryBcg font-semibold"
            >
              Oddaj rzeczy
            </Link>
            <Link href="/logout" onClick={handleLogout}>
              Wyloguj
            </Link>
          </>
        );
    }
  };

  return (
    <div className="navigations container flex flex-col justify-end ">
      <nav className="upperNav flex items-center justify-end gap-4 text-sm text-signIn_signOnBtn mt-9">
        {getUser()}
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
