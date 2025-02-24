import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href={"/"}>
          ST PIZZA
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        {/* <Link
          href={""}
          className="bg-primary text-white px-4 py-2 rounded-full"
        >
          Login
        </Link> */}
      </nav>

      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link href={"/login"} className="">
          Login
        </Link>
        <Link
          href={"/register"}
          className="bg-primary text-white px-4 py-2 rounded-full"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
