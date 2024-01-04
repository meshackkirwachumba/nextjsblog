import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin } from "@/lib/action";
import { auth } from "@/lib/auth";

const LoginPage = async () => {
  const session = await auth();

  // console.log(session);

  return (
    <div className="w-full h-[calc(100vh-200px)] flex justify-center items-center text-white">
      <div className="flex flex-col gap-5 w-full md:w-[45%]">
        <h1 className="text-3xl font-semibold">Login</h1>
        <form action={handleGithubLogin}>
          <button className="bg-blue-900 p-4">Login with Github</button>
        </form>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
