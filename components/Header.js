import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row items-center border-b-2 border-black py-10 px-10 justify-between">
      <h1 className="text-2xl hover:text-cyan-400 ease-in-out duration-500 cursor-grab">
        Llamas Best Hoop Shoes
      </h1>
      <div className="">
        <a className="px-6 cursor-grab">Best of 2020</a>
        <a className="px-6 cursor-grab">Best of 2021</a>
        <a className="px-6 cursor-grab">Best of 2022</a>
        <a className="px-6 cursor-grab">Best of 2023</a>
      </div>
    </div>
  );
}
