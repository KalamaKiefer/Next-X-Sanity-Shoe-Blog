import React from "react";
import { GiConverseShoe } from "react-icons/gi";

export default function Header() {
  return (
    <div className="flex flex-row items-center border-b-2 border-black py-10 px-10 justify-between sticky top-0 bg-gradient-to-r from-pink-500 to-purple-800 font-thin">
      <h1 className="text-3xl hover:text-white ease-in-out duration-500 cursor-grab">
        Llamas Best Hoop Shoes
      </h1>
      <div className="">
        <GiConverseShoe className="w-10 h-10 cursor-grab hover:text-white ease-in-out duration-500" />
      </div>
    </div>
  );
}
