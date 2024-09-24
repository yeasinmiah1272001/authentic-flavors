"use client";
import { useEffect, useState } from "react";
import { getData } from "@/helper";
import Container from "./Container";

const Ginger = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const endPoint = "https://shoppingapi.vercel.app/allspicy";
      const allData = await getData(endPoint);
      setProducts(allData);
    };

    fetchProducts();
  }, [products]);

  return (
    <Container className="py-5">
      <div>
        <h1 className="text-2xl text-black font-semibold">
          <i> Ginger Category ______</i>
        </h1>
      </div>

      {/* content */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 items-center justify-center lg:ml-5 mt-7">
        {products.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img
              src={item.imageUrl}
              alt={item.title}
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Ginger;
