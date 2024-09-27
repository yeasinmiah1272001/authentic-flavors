"use client";
import React, { useEffect } from "react";
import { FaPepperHot } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const PicySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-red-50 py-16 px-6">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Spicy Specials
          </h2>
          <p className="text-gray-600">
            Crank up the heat with our fiery selections!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Spicy Item 1 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            data-aos="zoom-in"
          >
            <div className="flex items-center justify-center text-red-600 mb-4">
              <FaPepperHot className="text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Hot Pepper Delight
            </h3>
            <p className="text-gray-600 text-center">
              A fiery mix of hot peppers sure to ignite your taste buds.
            </p>
          </div>

          {/* Spicy Item 2 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center text-red-600 mb-4">
              <AiFillFire className="text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Firecracker Chicken
            </h3>
            <p className="text-gray-600 text-center">
              Spicy chicken loaded with explosive flavor.
            </p>
          </div>

          {/* Spicy Item 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center text-red-600 mb-4">
              <FaPepperHot className="text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Spicy Noodles
            </h3>
            <p className="text-gray-600 text-center">
              Slurp up the heat with these mouth-burning noodles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PicySection;
