interface CategoriesProps {
  categories: string[];
  active: string;
  setActive: (value: string) => void;
}

const Categories = ({
  categories,
  active,
  setActive,
}: CategoriesProps) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-3 mb-6">
      <button
        onClick={() => setActive("All")}
        className={`px-4 py-2 rounded-full whitespace-nowrap ${
          active === "All"
            ? "bg-primary text-white"
            : "bg-gray-100"
        }`}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            active === cat
              ? "bg-primary text-white"
              : "bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
