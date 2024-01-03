import { handleGithubLogin } from "@/lib/action";
import { auth } from "@/lib/auth";

const LoginPage = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form action={handleGithubLogin}>
        <button className="bg-blue-900 p-5">Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
