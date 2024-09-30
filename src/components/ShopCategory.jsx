"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
} from "@/asset";
import Image from "next/image";
import Container from "./Container";

const ShopCategory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Container className="my-10">
      {/* Header */}
      <div className="text-center mb-8">
        <button className="text-2xl text-white bg-yellow-400 py-3 px-6 mx-auto block rounded-md shadow-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
          Shop By Category
        </button>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mx-auto duration-300">
        {/* Category Card */}
        <div
          className="bg-[#E7E5E5] p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#f5f5f5] transition duration-500 ease-in-out"
          data-aos="fade-up"
        >
          <div className="w-24 h-24 mb-4">
            <Image
              src={category1}
              alt="Category"
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold">Ginger</h1>
        </div>

        <div
          className="bg-[#E7E5E5] p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#f5f5f5] transition duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="w-24 h-24 mb-4">
            <Image
              src={category2}
              alt="Category"
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold">Cinnamon</h1>
        </div>

        <div
          className="bg-[#E7E5E5] p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#f5f5f5] transition duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="w-24 h-24 mb-4">
            <Image
              src={category3}
              alt="Category"
              className="rounded-full object-cover bg-[#FFFFFF] p-2"
            />
          </div>
          <h1 className="text-lg font-semibold">Dry Foods</h1>
        </div>

        <div
          className="bg-[#E7E5E5] p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#f5f5f5] transition duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="w-24 h-24 mb-4">
            <Image
              src={category4}
              alt="Category"
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold">Honey</h1>
        </div>

        <div
          className="bg-[#E7E5E5] p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#f5f5f5] transition duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="w-24 h-24 mb-4">
            <Image
              src={category5}
              alt="Category"
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold">Spicy</h1>
        </div>

        <div
          className="bg-[#E7E5E5] p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#f5f5f5] transition duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="w-24 h-24 mb-4">
            <Image
              src={category6}
              alt="Category"
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold">Oils</h1>
        </div>
      </div>
    </Container>
  );
};

export default ShopCategory;
