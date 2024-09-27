import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import Cinnamon from "@/components/Cinnamon";
import DryFoods from "@/components/DryFoods";
import Explore from "@/components/Explore";
import FressSection from "@/components/FressSection";
import Ginger from "@/components/Ginger";

import Honey from "@/components/Honey";
import Nuts from "@/components/Nuts";
import Oils from "@/components/Oil";
import PicySection from "@/components/picySection";
import ShopCategory from "@/components/ShopCategory";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ShopCategory />
      <AllProducts />
      <Ginger />
      <Cinnamon />
      <DryFoods />
      <Honey />
      <Nuts />
      <Oils />
      <PicySection />
      <FressSection />
      <Explore />
    </div>
  );
};

export default HomePage;
