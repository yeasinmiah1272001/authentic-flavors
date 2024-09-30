import { getData } from "@/helper";
import Image from "next/image";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const Tasty = async () => {
  const endPoint = "https://shoppingapi.vercel.app/allspicy";
  const allData = await getData(endPoint);

  return (
    <Container>
      <div className="mb-3">
        <SectionTitle
          title="Tasty Treats"
          subtitle="Discover a selection of our top spicy dishes!"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {allData.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between p-4">
              <Image
                className="w-28 h-28 rounded-full bg-gray-100 p-5"
                src={item.imageUrl}
                alt={item.title}
                height={100}
                width={100}
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-lg font-medium text-gray-600">
                  ${item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Tasty;
