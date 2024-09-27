import { getData } from "@/helper";
import Container from "./Container";
import Card from "./Card";
const Oils = async () => {
  const endPoint = "https://shoppingapi.vercel.app/allspicy";
  const allData = await getData(endPoint);
  const OilsCategory = allData.filter((item) => item.category === "Oil");
  return (
    <Container className="py-5">
      <div>
        <h1 className="text-3xl text-black font-semibold text-start lg:ml-5 mb-5">
          <i>Oils Category</i>
        </h1>
      </div>

      {/* content */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 items-center justify-center lg:ml-5 mt-7">
        {OilsCategory.slice(0, 4).map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default Oils;
