"use client";

import { FaStar } from "react-icons/fa";
import AddToCartBtn from "./AddToCartBtn";

const SingleProduct = ({ item }) => {
  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`h-5 w-5 ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="relative p-16 hover:scale-95 duration-300  w-96 h-96 rounded-lg overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{item.title}</h1>
          <h2 className="text-xl font-semibold text-gray-600">
            Category: {item.category}
          </h2>
          <h3 className="text-2xl font-bold text-indigo-600">${item.price}</h3>
          <div className="flex items-center space-x-1">
            {renderStars(item.rating)}
            <span className="text-gray-600">{item.rating} / 5</span>
          </div>
          <AddToCartBtn item={item} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
