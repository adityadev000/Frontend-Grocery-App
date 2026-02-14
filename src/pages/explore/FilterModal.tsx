import { useState } from "react";
import { FiX } from "react-icons/fi";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onApply: (categories: string[], min: number, max: number) => void;
  allCategories: string[];
}

const FilterModal = ({
  isOpen,
  onClose,
  onApply,
  allCategories,
}: Props) => {
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(50);

  if (!isOpen) return null;

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(
        selectedCategories.filter((c) => c !== cat)
      );
    } else {
      setSelectedCategories([
        ...selectedCategories,
        cat,
      ]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center ">

      <div className="bg-white w-full max-w-md  rounded-3xl p-6 animate-slideUp ">


        <div className="flex justify-between items-center mb-6">
          <FiX
            size={22}
            onClick={onClose}
            className="cursor-pointer"
          />
          <h2 className="text-lg font-semibold">
            Filters
          </h2>
          <div />
        </div>


        <h3 className="text-xl font-semibold mb-4">
          Categories
        </h3>

        {allCategories.map((cat) => (
          <div
            key={cat}
            onClick={() => toggleCategory(cat)}
            className="flex items-center gap-3 mb-4 cursor-pointer"
          >
            <div
              className={`w-6 h-6 rounded-md border flex items-center justify-center ${
                selectedCategories.includes(cat)
                  ? "bg-primary border-primary text-white"
                  : "border-gray-300"
              }`}
            >
              {selectedCategories.includes(cat) && "✓"}
            </div>
            <span
              className={
                selectedCategories.includes(cat)
                  ? "text-primary"
                  : ""
              }
            >
              {cat}
            </span>
          </div>
        ))}


        <h3 className="text-xl font-semibold mt-6 mb-4">
          Price Range
        </h3>

        <div className="flex gap-4 mb-4">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(Number(e.target.value))
            }
            className="w-1/2 border rounded-xl px-3 py-2 outline-none"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Number(e.target.value))
            }
            className="w-1/2 border rounded-xl px-3 py-2 outline-none"
          />
        </div>


        <button
          onClick={() => {
            onApply(
              selectedCategories,
              minPrice,
              maxPrice
            );
            onClose();
          }}
          className="w-full bg-primary text-white py-4 rounded-2xl mt-6 text-lg font-semibold"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
