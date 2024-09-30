"use client";
import { getData } from "@/helper";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const endPoint = "https://shoppingapi.vercel.app/allspicy";
      try {
        const allData = await getData(endPoint);
        setProducts(allData);
      } catch (error) {
        console.error("No data found");
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(filtered);
  }, [products, search]);

  return (
    <div className="flex-1 px-20 md:block hidden relative">
      <input
        className="bg-white w-full px-4 py-2 outline-none rounded-full border-2 border-yellow-400 hover:border-cyan-400 duration-300 pr-10 shadow-md"
        type="text"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <IoMdClose
          onClick={() => setSearch("")}
          className="absolute right-28 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer text-gray-400 hover:text-black"
        />
      )}

      {search && filterData.length > 0 && (
        <div className="absolute z-10 w-1/2 bg-white shadow-lg rounded-md mt-2 max-h-60 overflow-auto">
          {filterData.map((item) => (
            <Link
              onClick={() => setSearch("")}
              href={{
                pathname: `/singlepage/${item.id}`,
                query: { id: item.id },
              }}
            >
              <div
                key={item.title}
                className="p-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-5 transition duration-200"
              >
                <Image
                  className="w-14 h-14 rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                  src={item.imageUrl}
                  alt={item.title}
                  width={56}
                  height={56}
                />
                <h1 className="text-sm font-medium text-gray-800">
                  {item.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      )}
      {search && filterData.length === 0 && (
        <div className="absolute z-10 bg-white shadow-lg rounded-md mt-2 w-1/2">
          <div className="p-2 text-gray-500">No results found</div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
