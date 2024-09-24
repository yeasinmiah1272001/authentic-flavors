import { getData } from "@/helper";
import Container from "./Container";
import Card from "./Card";

const Ginger = async () => {
  const endPoint = "https://shoppingapi.vercel.app/allspicy";
  const products = await getData(endPoint);

  // Filter for ginger category specifically from spices
  const gingercategory = products.filter(
    (item) => item.category === "Cinnamon"
  );
  console.log("ginger", gingercategory);

  return (
    <Container className="py-5">
      <div>
        <h1 className="text-2xl text-black font-semibold">
          <i> Ginger Category ______</i>
        </h1>
      </div>

      {/* content */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 items-center justify-center lg:ml-5 mt-7">
        {gingercategory.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Ginger;
