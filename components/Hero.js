/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "../lib/sanity";

export default function Hero({ img, name }) {
  return (
    <div className="px-40 mt-20">
      <div className="flex flex-row  bg-gray-700  rounded-xl h-72 text-left  pl-10">
        <h1 className="text-white text-6xl mr-10 pt-28">
          Hoop Shoe of The Week
        </h1>
        <div className="pt-6 pl-32 overflow-hidden">
          <img
            src={urlFor(img).width(200).url()}
            alt=""
            className="w-60 rounded-xl hover:scale-90 transition ease-in-out duration-500 cursor-grab"
          />
        </div>
        <p className="pl-10 pt-40 text-white text-xl">{name}</p>
      </div>
    </div>
  );
}
