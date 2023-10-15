"use client";
import { useUser } from "@/providers/UserProvider";
import { useRouter } from "next/navigation";

export default function PrivateRoute({ children }) {
  const { user } = useUser();
  const router = useRouter();

  if (!user) {
    router.push("/login");
    return;
  }

  return children;
}
