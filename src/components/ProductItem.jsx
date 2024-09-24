"use client";
import { getData } from "@/helper";

const ProductItem = async ({ products }) => {
  const endPoint = "https://shoppingapi.vercel.app/allspicy";
  const products = await getData(endPoint);

  return <div></div>;
};

export default ProductItem;
