/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/sanity";

export default function ProductCard({ title, image, description }) {
  return (
    <div
      className="shadow-sm shadow-black  rounded-xl py-10 flex flex-col items-center cursor-grab
    hover:shadow-black  hover:shadow-2xl ease-in-out duration-500
    "
    >
      <h1>{title}</h1>
      <img
        src={urlFor(image).width(200).url()}
        alt=""
        className="w-48 h-48 mb-5"
      />
      <p>{description}</p>
    </div>
  );
}
