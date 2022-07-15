import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "../lib/sanity";
import { groq } from "next-sanity";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import Header from "../components/Header";

export default function Home(props) {
  const { productdata, preview } = props;

  const router = useRouter();
  const [format, setFormat] = useState(true);

  const { data: products } = usePreviewSubscription(query, {
    initialData: productdata,
    enabled: preview || router.query.preview !== undefined,
  });

  return (
    <>
      <Header />
      <div className="px-20 py-20">
        <button
          className="border-2 border-red-500 rounded-md mt-4"
          onClick={() => setFormat(!format)}
        >
          Switch View
        </button>
        {format ? (
          <div className="mt-20 text-2xl grid grid-cols-3 gap-48">
            {products &&
              products.map((product) => (
                <ProductCard
                  title={product.title}
                  key={product.title}
                  description={product.blurb.en}
                  image={product.defaultProductVariant.images[0].asset}
                />
              ))}
          </div>
        ) : (
          <div className="mt-20 text-2xl grid grid-row-3 gap-32 px-96">
            {products &&
              products.map((product) => (
                <ProductCard
                  title={product.title}
                  key={product.title}
                  description={product.blurb.en}
                  image={product.defaultProductVariant.images[0].asset}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
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
