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
import Hero from "../components/Hero";
import { BiGridVertical, BiGridHorizontal } from "react-icons/bi";

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
      <Hero
        img={products.at(0).defaultProductVariant.images[0].asset}
        name={products.at(0).title}
      />
      <div className="px-40 py-20">
        {format ? (
          <BiGridVertical
            onClick={() => setFormat(!format)}
            className="cursor-grab w-20 h-12 mb-6"
          />
        ) : (
          <BiGridHorizontal
            onClick={() => setFormat(!format)}
            className="cursor-grab w-20 h-12 mb-6"
          />
        )}
        {format ? (
          <div className="text-2xl grid grid-cols-3 gap-32">
            {products &&
              products.map((product) => (
                <ProductCard
                  title={product.title}
                  key={product.title}
                  description={product.blurb.en}
                  image={product.defaultProductVariant.images[0].asset}
                  price={product.defaultProductVariant.price}
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
                  price={product.defaultProductVariant.price}
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
