"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const TestHook = () => {
  const randomNumber = Math.floor(Math.random() * 100);

  const router = useRouter();

  const pathName = usePathname();
  console.log(pathName); // /testhook

  const searchParams = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get("query"));

  const createQueryString = useCallback(
    (name, value) => {
      const searchParam = new URLSearchParams();
      searchParam.set(name, value);

      return searchParam.toString();
    },
    [searchParams]
  );

  return (
    <div>
      <h1 suppressHydrationWarning>Random: {randomNumber}</h1>
      <button
        className="bg-red-500 p-5"
        onClick={() => {
          router.push(
            pathName + "?" + createQueryString("query", "meshkirwade")
          );
        }}
      >
        Set Params
      </button>
    </div>
  );
};

export default TestHook;
