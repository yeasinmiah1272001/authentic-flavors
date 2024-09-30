"use client";
import { addToCart } from "@/Redux/spicySlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const AddToCartBtn = ({ item }) => {
  const dispatch = useDispatch();
  console.log("item", dispatch);
  const handleAddToCartbtn = () => {
    if (item) {
      dispatch(addToCart(item));
    }
  };
  return (
    <div>
      <button
        onClick={handleAddToCartbtn}
        className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
