"use client";
import { useSearchParams } from "next/navigation";
import { LoginForm1 } from "./authentication-01";
import { LoginForm2 } from "./authentication-02";
import { LoginForm3 } from "./authentication-03";
import { LoginForm4 } from "./authentication-04";

export function Authentication() {
  const searchParams = useSearchParams();
  const search = searchParams.get("id") || "1";
  return (
    <>
      {search === "1" ? (
        <LoginForm1 />
      ) : search === "2" ? (
        <LoginForm2 />
      ) : search === "3" ? (
        <LoginForm3 />
      ) : (
        <LoginForm4 />
      )}
    </>
  );
}
