import Image from "next/image";
import Link from "next/link";

const ModalImg = ({ item }) => {
  return (
    <div>
      <Link
        href={{ pathname: `/singlepage/${item.id}`, query: { id: item.id } }}
      >
        <Image
          className="h-32 w-48 rounded-full mx-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          src={item.imageUrl}
          alt={item.title}
          width={400}
          height={400}
        />
      </Link>
    </div>
  );
};

export default ModalImg;
