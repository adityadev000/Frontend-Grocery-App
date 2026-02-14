import { useState } from "react";
import { products, categories } from "../../data/product";
import ProductCard from "../../components/product/ProductCard";
import FilterModal from "../../pages/explore/FilterModal";
import {
  FiSearch,
  FiX,
  FiArrowLeft,
  FiSliders,
} from "react-icons/fi";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(null);

  const [showFilter, setShowFilter] =
    useState(false);

  const [activeCategories, setActiveCategories] =
    useState<string[]>([]);

  const [priceRange, setPriceRange] =
    useState({
      min: 0,
      max: 1000,
    });



  const filteredProducts = products.filter(
    (p) => {
      const matchesSearch = p.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory
          ? p.category === selectedCategory
          : activeCategories.length === 0 ||
            activeCategories.includes(
              p.category
            );

      const matchesPrice =
        p.price >= priceRange.min &&
        p.price <= priceRange.max;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice
      );
    }
  );

  return (
    <div className="p-4 pb-28 max-w-7xl mx-auto">



      {!selectedCategory ? (
        <h1 className="text-2xl font-bold text-center mb-6">
          Find Products
        </h1>
      ) : (
        <div className="flex items-center justify-between mb-6">
          <FiArrowLeft
            size={22}
            onClick={() => {
              setSelectedCategory(null);
              setSearch("");
            }}
            className="cursor-pointer"
          />

          <h1 className="text-xl font-semibold">
            {selectedCategory}
          </h1>

          <FiSliders
            size={20}
            className="cursor-pointer"
            onClick={() =>
              setShowFilter(true)
            }
          />
        </div>
      )}



      <div className="bg-gray-100 flex items-center rounded-xl p-3 mb-6">
        <FiSearch className="text-gray-400" />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search Store"
          className="bg-transparent outline-none w-full px-2"
        />

        {search && (
          <FiX
            onClick={() => setSearch("")}
            className="text-gray-500 cursor-pointer"
          />
        )}
      </div>



      {(search || selectedCategory) && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )
            )
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found
            </p>
          )}
        </div>
      )}



      {!search && !selectedCategory && (
        <div className="grid grid-cols-2 gap-4">
          {categories.map(
            (category, index) => (
              <div
                key={category}
                onClick={() =>
                  setSelectedCategory(
                    category
                  )
                }
                className="rounded-3xl p-6 cursor-pointer shadow-sm border text-center hover:shadow-md transition"
                style={{
                  backgroundColor:
                    getCategoryColor(index),
                }}
              >
                <img
                  src={`https://picsum.photos/seed/${category}/200`}
                  className="h-24 mx-auto mb-4 object-contain rounded-md"
                />

                <h3 className="font-semibold text-lg">
                  {category}
                </h3>
              </div>
            )
          )}
        </div>
      )}



      <FilterModal
        isOpen={showFilter}
        onClose={() =>
          setShowFilter(false)
        }
        onApply={(cats, min, max) => {
          setActiveCategories(cats);
          setPriceRange({
            min,
            max,
          });
        }}
        allCategories={categories}
      />
    </div>
  );
};

export default Explore;



const getCategoryColor = (
  index: number
) => {
  const colors = [
    "#E8F5E9",
    "#FFF3E0",
    "#FCE4EC",
    "#EDE7F6",
    "#FFFDE7",
    "#E3F2FD",
    "#F3E5F5",
    "#F1F8E9",
  ];
  return colors[index % colors.length];
};
