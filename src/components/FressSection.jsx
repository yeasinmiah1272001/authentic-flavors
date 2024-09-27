"use client";
import React, { useEffect } from "react";
import { FaLeaf, FaAppleAlt, FaCarrot } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FressSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Fresh Picks of the Day
          </h2>
          <p className="text-gray-600">
            Dive into our hand-picked selection of the freshest produce.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Fresh Pick 1 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            data-aos="flip-left"
          >
            <div className="flex items-center justify-center text-green-600 mb-4">
              <FaLeaf className="text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Organic Green Salad
            </h3>
            <p className="text-gray-600 text-center">
              A refreshing mix of organic greens, perfect for your health.
            </p>
          </div>

          {/* Fresh Pick 2 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            data-aos="zoom-in"
          >
            <div className="flex items-center justify-center text-green-600 mb-4">
              <FaAppleAlt className="text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Crisp Red Apples
            </h3>
            <p className="text-gray-600 text-center">
              Juicy and sweet apples that are handpicked from the finest
              orchards.
            </p>
          </div>

          {/* Fresh Pick 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            data-aos="flip-right"
          >
            <div className="flex items-center justify-center text-green-600 mb-4">
              <FaCarrot className="text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Farm-Fresh Carrots
            </h3>
            <p className="text-gray-600 text-center">
              Sweet, crunchy, and loaded with nutrients to fuel your day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FressSection;
