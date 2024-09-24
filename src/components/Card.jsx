import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className="h-96 w-64 bg-gray-400 border-2 border-red-500">
      {/* Make sure item.imageUrl is a valid URL */}
      <Image
        src={item.imageUrl}
        alt="Image description"
        height={300}
        width={300}
      />
    </div>
  );
};

export default Card;
