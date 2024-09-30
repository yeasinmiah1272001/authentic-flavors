import React from "react";
import Container from "./Container";
import Image from "next/image";
import { logo } from "@/asset";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";

const TopNav = () => {
  return (
    <div className=" py-4 shadow-lg">
      <Container className={"flex items-center justify-between"}>
        {/* left */}
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        {/* middle*/}
        <div className="flex-1 px-20 md:block hidden">
          <input
            className="bg-white w-full px-4 p-2 outline-none rounded-full border-2 border-yellow-400 hover:border-cyan-400 duration-300"
            type="text"
            placeholder="Type here"
          />
        </div>
        {/* right */}
        <div className="flex items-center gap-6 relative">
          {/* <div className="relative">
            <FaShoppingCart className="text-2xl cursor-pointer" />

            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </div> */}
          <div>
            {/* <img
            src="/user.jpg" // Replace with the actual path to your image
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer"
          /> */}
            <FaUser className="rounded-full" size={30} />
          </div>
          <button className="px-4 py-1.5 bg-blue-600 text-white rounded">
            Login
          </button>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
