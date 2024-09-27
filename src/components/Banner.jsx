"use client";

import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner1, banner3, banner5 } from "@/asset";
import { banner4 } from "@/asset";
import { banner6 } from "@/asset";
import { banner7 } from "@/asset";
import { banner8 } from "@/asset";

// PrevArrow component should receive onClick as a prop
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

// NextArrow component should receive onClick as a prop
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {[banner1, banner5, banner4, banner6, banner7, banner8].map(
          (image, index) => (
            <div key={index}>
              <div className="relative w-full h-[470px]">
                <Image
                  src={image}
                  alt={`banner ${index + 1}`}
                  fill
                  className="object-cover shadow-lg"
                />
              </div>
            </div>
          )
        )}
      </Slider>
      {/* SVG placed right after the slider */}
    </div>
  );
};

export default Banner;
