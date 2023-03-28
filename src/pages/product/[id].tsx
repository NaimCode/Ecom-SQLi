/* eslint-disable @next/next/no-img-element */
import ImageSwitcher from "@/components/ImageSwitcher";
import { getImagesUrl } from "@/utils";
import { client } from "@/utils/contentful";
import { useState } from "react";
import cx from "classnames";
import ReactMarkdown from "react-markdown";
import Card from "@/components/card";
export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "product",
    order: "sys.createdAt",
  });

  const products = res.items.map((entry: any) => {
    return {
      id: entry.sys.id,
      ...entry.fields,
    };
  });
  const paths = products.map((prod: any) => {
    return {
      params: { id: prod.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await client.getEntries({
    content_type: "product",
    "sys.id": id,
  });
  const product = res.items.map((entry: any) => {
    return {
      id: entry.sys.id,
      ...entry.fields,
    };
  });
  return {
    props: { product: product[0] },
  };
};

function Product({ product }: any) {
  const [size, setSize] = useState(product.size[0]);
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className=" flex flex-row  gap-[100px]  max-w-[1000px] mx-auto items-center">
        <div
          className={cx(
            " flex flex-col  my-[100px] ",
            product.images.length > 1
              ? "gap-[200px] w-[500px]"
              : "gap-[30px] w-[700px]"
          )}
        >
          <div className=" h-[500px] w-full bg-no-repeat bg-cover bg-center ">
            {product.images.length > 1 ? (
              <ImageSwitcher
                title={product.title}
                images={getImagesUrl(product.images)}
              />
            ) : (
              <img src={getImagesUrl(product.images)[0]} alt={product.title} />
            )}
          </div>
          <div className="space-y-6">
            <ReactMarkdown>{product.description}</ReactMarkdown>
          </div>
        </div>
        <div className="fixed right-0 bottom-0 bg-[#F6F4F5] w-[500px]  shadow">
          <h6 className=" p-4 px-20 text-xs uppercase font-semibold bg-green-200">
            About the product
          </h6>
          <div className="py-10 px-20 space-y-6">
            <h1 className="text-2xl">{product.title}</h1>
            <hr />
            <div className="flex flex-row items-center">
              {product.size.map((siz: any, i: number) => {
                return (
                  <button
                    onClick={() => setSize(siz)}
                    key={i}
                    className="flex flex-row items-center gap-2"
                  >
                    <div
                      className={cx(
                        "w-8 h-8   rounded-full grid justify-center items-center mr-3",
                        size === siz ? "bg-green-200" : "bg-gray-200"
                      )}
                    >
                      {siz}
                    </div>
                  </button>
                );
              })}
            </div>
            <hr />
            <div className="flex flex-row gap-10">
              <button
                className="w-8 h-8 bg-gray-200  rounded-full grid justify-center items-center"
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="w-8 h-8 bg-gray-200  rounded-full grid justify-center items-center mr-3"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="flex flex-row gap-10 items-center py-10">
              <h2 className="text-green-900 text-3xl font-semibold">
                $ {product.price * quantity}
              </h2>
              <button className="bg-green-200 flex-grow py-3 text-lg font-semibold">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
