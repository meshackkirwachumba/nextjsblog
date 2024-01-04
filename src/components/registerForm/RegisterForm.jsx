"use client";

import { registerUser } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const router = useRouter();

  const [state, formAction] = useFormState(registerUser, undefined);

  console.log("state", state);

  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state?.success, router]);

  return (
    <form action={formAction} className="flex flex-col gap-5 w-full md:w-[45%]">
      <h1 className="text-3xl font-semibold">Register</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        className="bg-slate-800 p-3 rounded border-2 border-slate-500 outline-none focus:border-slate-400"
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        className="bg-slate-800 p-3 rounded border-2 border-slate-500 outline-none focus:border-slate-400"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="bg-slate-800 p-3 rounded border-2 border-slate-500 outline-none focus:border-slate-400"
      />
      <input
        type="password"
        placeholder="confirm password"
        name="passwordRepeat"
        className="bg-slate-800 p-3 rounded border-2 border-slate-500 outline-none focus:border-slate-400"
      />
      <button className="bg-slate-800 p-3 rounded">Register</button>
      {state?.error && <p className="text-red-500">{state.error}</p>}
      <span>
        Already have an account?
        <Link
          href="/login"
          className="text-slate-400 ml-2 underline cursor-pointer"
        >
          Login
        </Link>
      </span>
    </form>
  );
};

export default RegisterForm;
