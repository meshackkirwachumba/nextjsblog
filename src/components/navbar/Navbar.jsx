import Links from "./links/Links";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between  h-[100px]">
      <div className="text-3xl font-bold">
        <Link href="/">Logo</Link>
      </div>
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
