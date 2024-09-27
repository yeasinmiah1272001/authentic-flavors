import Link from "next/link";

const ViewDetails = ({ item }) => {
  return (
    <div>
      <button className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-colors duration-300">
        <Link
          href={{ pathname: `/singlepage/${item.id}`, query: { id: item.id } }}
        >
          {" "}
          View Details
        </Link>
      </button>
    </div>
  );
};

export default ViewDetails;
