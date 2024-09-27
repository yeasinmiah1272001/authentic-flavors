import { getData } from "@/helper";

const SinglePage = async ({ params }) => {
  const id = Number(params.id);
  console.log("ids", typeof id);
  const endPoint = "https://shoppingapi.vercel.app/allspicy";
  const allData = await getData(endPoint);

  const singleData = allData.find((item) => item.id === id);

  console.log("data", singleData);

  return <div>SinglePage</div>;
};

export default SinglePage;
