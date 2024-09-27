import AddToCartBtn from "./AddToCartBtn";

const Card = ({ item }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="overflow-hidden rounded-t-lg">
        <img
          className="h-56 p-9 rounded-full mx-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          src={item.imageUrl}
          alt={item.title}
          width={400}
          height={400}
        />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-bold text-gray-800">Title: {item.title}</h1>
        <h2 className="text-sm text-gray-600">Category: {item.category}</h2>
        <p className="text-md text-gray-900 font-semibold mt-1">
          Price: ${item.price}
        </p>
        <AddToCartBtn />
      </div>
    </div>
  );
};

export default Card;
