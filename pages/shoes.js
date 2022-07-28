import React from "react";
import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "../lib/sanity";

export default function Shoes() {
  const { productdata, preview } = props;

  const router = useRouter();

  return <div>shoes</div>;
}

const query = groq`
*[_type == "product"] | order(_createdAt desc) {
  ...,
  vendor->,
}
`;

export async function getStaticProps({ params, preview = false }) {
  const product = await getClient(preview).fetch(query);

  return {
    props: {
      productdata: product,
      preview,
    },
    revalidate: 10,
  };
}
