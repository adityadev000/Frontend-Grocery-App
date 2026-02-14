import { products } from "../../data/product";
import { useLocationStore } from "../../stores/locationStore";
import BannerSlider from "../../pages/home/BannerSlider";
import Section from "../../pages/home/Section";
import carrot from "../../asset/carrot.png";
import banner from "../../asset/banner.png";
import { FiMapPin, FiSearch } from "react-icons/fi";

const Home = () => {
  const { zone, area } = useLocationStore();

  const exclusiveProducts = products.slice(0, 8);

  const bestSellingProducts = products.filter(
    (p) => p.rating >= 4.6
  );

  const groceryProducts = products;

  return (
    <div className="p-4 pb-28 max-w-7xl mx-auto">


      <div className="flex justify-center">
        <img
          src={carrot}
          alt="logo"
          className="w-8"
        />
      </div>


      <div className="flex items-center justify-center gap-2 mt-2 text-lg font-medium">
        <FiMapPin />
        {zone}, {area}
      </div>


      <div className="bg-gray-100 flex items-center gap-2 rounded-xl p-3 mt-4">
        <FiSearch className="text-gray-400" />
        <input
          placeholder="Search Store"
          className="bg-transparent outline-none w-full"
        />
      </div>


      <BannerSlider
        images={[banner, banner, banner]}
      />


      <Section
        title="Exclusive Offer"
        products={exclusiveProducts}
        viewAllPath="/section/exclusive"
      />


      <Section
        title="Best Selling"
        products={bestSellingProducts}
        viewAllPath="/section/best-selling"
      />


      <Section
        title="Groceries"
        products={groceryProducts}
        viewAllPath="/section/groceries"
      />
    </div>
  );
};

export default Home;
