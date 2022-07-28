/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "../lib/sanity";

export default function ShoePage({ title, image, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={urlFor(image).url()} alt="" />
    </div>
  );
}
