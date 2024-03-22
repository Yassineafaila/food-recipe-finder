import React from "react";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header className="w-full py-5 shadow">
      <nav className="container max-w-[1400px]  mx-auto flex items-center justify-between px-4">
        <h1 className="font-bold text-xl">
          <Link href={"/"}>Aikini Food</Link>
        </h1>
        <ul className="flex gap-2 lg:gap-3">
          <li className="hover:text-orange-400">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-orange-400">
            <Link href={"/recipes"}>Recipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
