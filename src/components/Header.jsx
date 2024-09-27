import React from "react";
import TopNav from "./TopNav";
import Link from "next/link";

const Header = () => {
  const nav = [
    { title: "Home", href: "/" },
    { title: "Ginger", href: "ginger" },
    { title: "Cinnamon", href: "cinamon" },
    { title: "Dry Fruits", href: "dry" },
    { title: "Honey", href: "honey" },
    { title: "Nuts", href: "nuts" },
    { title: "Oils", href: "oils" },
  ];

  return (
    <div className="font-bodyfont">
      <div>
        <TopNav />
      </div>
      <div className="flex p-3 bg-black text-white text-center">
        <div className="flex gap-8 items-center justify-center mx-auto">
          {nav.map((item) => (
            <ul
              className="flex gap-6 mx-auto text-center items-center justify-center"
              key={item.title}
            >
              <Link href={item.href}>
                <p className="text-center items-center justify-center transition duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                  {item.title}
                </p>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
