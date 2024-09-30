"use client";
import SingleProduct from "@/components/SingleProduct";
import { getData } from "@/helper";

const SinglePage = async ({ params }) => {
  const id = Number(params.id);
  console.log("ids", typeof id);
  const endPoint = "https://shoppingapi.vercel.app/allspicy";
  const allData = await getData(endPoint);

  const singleData = allData.find((item) => item.id === id);

  return (
    <div>
      <SingleProduct item={singleData} />
    </div>
  );
};

export default SinglePage;
