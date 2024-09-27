import { getData } from "@/helper";
import Container from "./Container";
import Marquee from "react-fast-marquee";
import AddToCartBtn from "./AddToCartBtn";

const AllProducts = async () => {
  const endPoint = "https://shoppingapi.vercel.app/allspicy";
  const allData = await getData(endPoint);

  return (
    <Container>
      <div className="text-center mt-9 font-medium  p-6">
        <h2 className="text-3xl font-bold text-designColor mb-4">
          All Content
        </h2>
        <Marquee gradient={false}>
          <div className="flex items-center space-x-4">
            {" "}
            {/* Space between items */}
            {allData.map((item) => (
              <div
                key={item.id} // Add a key for each item
                className="border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out p-4"
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    className="h-56 w-60 bg-[#FFFFFF] rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    src={item.imageUrl}
                    alt={item.title}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="text-left">
                  <h1 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h1>
                  <h2 className="text-sm text-gray-600">
                    Category: {item.category}
                  </h2>
                  <p className="text-md text-gray-900 font-semibold mt-1">
                    Price:{" "}
                    <span className="text-designColor">${item.price}</span>
                  </p>
                  <AddToCartBtn />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </Container>
  );
};

export default AllProducts;
