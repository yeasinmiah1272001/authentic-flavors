import React from "react";
import Container from "./Container";
import Link from "next/link";

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
  return (
    <div className="bg-black text-white py-2.5">
      <Container>
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
      </Container>
    </div>
  );
};

export default BottomNav;
