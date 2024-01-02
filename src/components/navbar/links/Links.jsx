"use client";

import { useState } from "react";
import NavLink from "../NavLink";
import Image from "next/image";

const Links = () => {
  const navLinks = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  // Temporary
  const session = true;
  const isAdmin = true;

  // for mobile view
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      {/* desktop view */}
      <div className="hidden md:flex gap-2.5 items-center">
        {navLinks.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}

        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="px-2.5 py-1.5 font-semibold bg-[var(--text)] text-[var(--bg)]">
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      {/* mobile view */}
      <button onClick={() => setOpen((prev) => !prev)} className="md:hidden">
        <Image src="/menu.png" alt="menu" width={30} height={30} />
      </button>
      {open && (
        <div
          className="
            absolute
            right-0
            top-[100px]
            w-1/2
            h-[calc(100vh-100px)]
            bg-[var(--sidebar)]
            z-10
            md:hidden
            flex
            flex-col
            items-center
            justify-center
            gap-2.5
            transition
            duration-300
            ease-in-out
          "
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              item={link}
              onClick={() => setOpen((prev) => !prev)}
            />
          ))}
          {session ? (
            <>
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <button className="px-2.5 py-1.5 font-semibold bg-[var(--text)] text-[var(--bg)]">
                Logout
              </button>
            </>
          ) : (
            <NavLink
              item={{ title: "Login", path: "/login" }}
              onClick={() => setOpen((prev) => !prev)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
