"use client";

import { loginUserWithCredentials } from "@/lib/action";
import Link from "next/link";
import { useFormState } from "react-dom";
// import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [state, formAction] = useFormState(loginUserWithCredentials, undefined);

  //   const router = useRouter();

  //   useEffect(() => {
  //     if (state?.success) {
  //       router.push("/");
  //     }
  //   }, [state?.success, router]);
  return (
    <form action={formAction} className="flex flex-col gap-5 w-full">
      <input
        type="text"
        placeholder="username"
        name="username"
        className="bg-slate-800 p-3 rounded border-2 border-slate-500 outline-none focus:border-slate-400"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="bg-slate-800 p-3 rounded border-2 border-slate-500 outline-none focus:border-slate-400"
      />
      <button className="bg-slate-800 p-3 rounded">Login</button>
      {state?.error && <p className="text-red-500">{state.error}</p>}
      <span>
        {"Don't have an account?"}
        <Link
          href="/register"
          className="text-slate-400 ml-2 underline cursor-pointer"
        >
          Create Account
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
