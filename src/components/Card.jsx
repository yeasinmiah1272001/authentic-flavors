"use client";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
import ModalImg from "./ModalImg";
import ViewDetails from "./ViewDetails";

const Card = ({ item }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          onClick={() =>
            document.getElementById(`modal_${item.id}`).showModal()
          }
          className="h-56 p-9 rounded-full mx-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
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
            <ModalImg item={item} />
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

      <div className="p-4">
        <h3 className="font-bold text-lg">{item.title}</h3>
        <h2 className="text-sm text-gray-600">Category: {item.category}</h2>
        <p className="text-md text-gray-900 font-semibold mt-1">
          Price: ${item.price}
        </p>
        <ViewDetails item={item} />
      </div>
    </div>
  );
};

export default Card;
