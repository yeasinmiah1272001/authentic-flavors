"use client";
import { getData } from "@/helper";
import Container from "./Container";
import Marquee from "react-fast-marquee";
import AddToCartBtn from "./AddToCartBtn";
import ViewDetails from "./ViewDetails";
import Image from "next/image";

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
                  <Image
                    onClick={() =>
                      document.getElementById(`modal_${item.id}`).showModal()
                    }
                    className="h-56 w-60 bg-[#FFFFFF] rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    src={item.imageUrl}
                    alt={item.title}
                    width={400}
                    height={400}
                  />
                  {/* modal start */}
                  <dialog
                    id={`modal_${item.id}`}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-lg">{item.title}</h3>
                        </div>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>

                      <p className="py-4">{item.description}</p>
                      <div>
                        <img
                          className="h-32 w-48 rounded-full mx-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                          src={item.imageUrl}
                          alt={item.title}
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="p-4">
                        <h1 className="text-lg font-bold text-gray-800">
                          Title: {item.title}
                        </h1>
                        <h2 className="text-sm text-gray-600">
                          Category: {item.category}
                        </h2>
                        <p className="text-md text-gray-900 font-semibold mt-1">
                          Price: ${item.price}
                        </p>
                        <AddToCartBtn item={item} />
                      </div>
                    </div>
                  </dialog>
                  {/* modal end */}
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
                  <ViewDetails item={item} />
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
