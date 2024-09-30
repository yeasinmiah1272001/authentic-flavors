"use client";
import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import {
  MdStar,
  MdRestaurantMenu,
  MdEmojiFoodBeverage,
  MdFlare,
} from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import "../components/Css/Offer.css";

const Offer = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div>
      <SectionTitle
        title={"Exciting Offers for Our Customers!"}
        subtitle={"Don't miss out on our special deals and delicious meals!"}
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-10">
        <figure
          data-aos="fade-up" // AOS animation attribute
          className="snip1563 flex flex-col items-center h-48 border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <MdStar className="text-6xl text-red-600 mb-4" />
          <figcaption className="text-center">
            <h3 className="font-bold text-xl">Spicy Starter Pack</h3>
            <p className="text-sm text-black">
              Enjoy a selection of our hottest appetizers at a discounted price.
              Perfect for sharing!
            </p>
          </figcaption>
        </figure>
        <figure
          data-aos="fade-up" // AOS animation attribute
          className="snip1563 flex flex-col items-center h-48 border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <MdRestaurantMenu className="text-6xl text-red-600 mb-4" />
          <figcaption className="text-center">
            <h3 className="font-bold text-xl">Flaming Main Course</h3>
            <p className="text-sm text-black">
              Dive into our signature spicy main dishes with a special offer for
              a limited time only!
            </p>
          </figcaption>
        </figure>
        <figure
          data-aos="fade-up" // AOS animation attribute
          className="snip1563 flex flex-col items-center h-48 border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <MdEmojiFoodBeverage className="text-6xl text-red-600 mb-4" />
          <figcaption className="text-center">
            <h3 className="font-bold text-xl">Heatwave Beverages</h3>
            <p className="text-sm text-black">
              Refresh yourself with our spicy cocktails and drinks, now at a
              special price!
            </p>
          </figcaption>
          <a href="#" className="mt-2 text-blue-500 hover:underline">
            Learn More
          </a>
        </figure>
        <figure
          data-aos="fade-up" // AOS animation attribute
          className="snip1563 flex flex-col items-center h-48 border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <MdFlare className="text-6xl text-red-600 mb-4" />
          <figcaption className="text-center">
            <h3 className="font-bold text-xl">Burning Dessert Deal</h3>
            <p className="text-sm text-black">
              End your meal on a high note with our spicy desserts, available at
              a fantastic price!
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Offer;
