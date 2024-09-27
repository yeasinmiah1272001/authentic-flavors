"use client";
import { useEffect } from "react";
import { FaPepperHot } from "react-icons/fa";
// import Container from "./Container"
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "./Container";

const Explore = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container className="flex flex-col lg:flex-row items-center w-full justify-between py-8 mx-auto lg:ml-32">
      <div className="w-1/2 flex flex-col items-start">
        <h2
          className="text-3xl font-bold text-gray-800 mb-4"
          data-aos="fade-up"
        >
          Spice Up Your Life
        </h2>
        <p
          className="text-gray-600 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover a range of spicy flavors that will tantalize your taste buds!
          From fiery hot sauces to aromatic spices, our collection is perfect
          for those who love a little heat in their meals. Embrace the spice of
          life and elevate your dishes to a whole new level!
        </p>
        <button className="mt-4 text-white bg-red-500 py-2 px-6 rounded-md shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
          Explore More
        </button>
      </div>
      <div className="w-1/2 flex justify-center lg:mt-0 mt-10">
        <FaPepperHot className="text-red-600 text-[160px]" />
      </div>
    </Container>
  );
};

export default Explore;
