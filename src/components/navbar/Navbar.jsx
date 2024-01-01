import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="text-3xl font-bold">Logo</div>
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
