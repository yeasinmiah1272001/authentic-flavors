"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import CartPage from "@/app/cart/page";
import FavouritePage from "@/app/favourite/page";
import { useSelector } from "react-redux";

const BottomNav = () => {
  const nav = [
    { title: "Home", href: "/" },
    { title: "Ginger", href: "ginger" },
    { title: "Cinnamon", href: "cinamon" },
    { title: "Dry Fruits", href: "dry" },
    { title: "Honey", href: "honey" },
    { title: "Nuts", href: "nuts" },
    { title: "Oils", href: "oils" },
  ];

  const selector = useSelector((state) => state.spicy.cart);
  console.log("state", selector);

  return (
    <div className="bg-[#323151] text-white py-2.5">
      <Container className={"flex justify-between items-center"}>
        <div>
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className=" py-2 border border-gray-500 px-3 bg-black text-white rounded-md"
            >
              All Category
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-black rounded-box z-[1] w-52 p-2 shadow space-y-2"
            >
              {nav.map((item) => (
                <Link
                  className="p-3 border border-gray-400 rounded-md bg-transparent hover:bg-slate-400 hover:text-white duration-300"
                  href={item.href}
                  key={item.title}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button  btn-primary"
              >
                <div className="flex gap-4">
                  <div className="relative">
                    <FaShoppingCart className="text-2xl cursor-pointer" />

                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {selector.length > 0 ? selector.length : "0"}
                    </span>
                  </div>
                  <div className="relative">
                    <FaHeart className="text-2xl cursor-pointer" />

                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      0
                    </span>
                  </div>
                </div>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-gray-300 text-black font-medium min-h-full w-80 p-4 space-y-3">
                {/* Sidebar content here */}
                <Link
                  className="border border-black p-2 bg-transparent hover:bg-slate-400 hover:text-white duration-300"
                  href={"/cart"}
                >
                  <CartPage />
                </Link>
                <Link
                  className="border border-black p-2 bg-transparent hover:bg-slate-400 hover:text-white duration-300"
                  href={"/favourite"}
                >
                  <FavouritePage />
                </Link>
                <Link
                  className="border border-black p-2 bg-transparent hover:bg-slate-400 hover:text-white duration-300"
                  href={"/cart"}
                >
                  <CartPage />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomNav;
