"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <div>
      <Link
        className={`
        ${pathName === item.path ? "bg-[var(--text)] text-[var(--bg)]" : ""}
        min-w-[100px] p-[10px] rounded-[20px] font-semibold text-center 
        `}
        href={item.path}
      >
        {item.title}
      </Link>
    </div>
  );
};

export default NavLink;
