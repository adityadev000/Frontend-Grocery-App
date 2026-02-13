import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";

interface SectionProps {
  title: string;
  products: any[];
  viewAllPath: string;
}

const Section = ({
  title,
  products,
  viewAllPath,
}: SectionProps) => {
  const navigate = useNavigate();

  return (
    <div className="mt-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          {title}
        </h2>

        <button
          onClick={() => navigate(viewAllPath)}
          className="text-primary font-medium"
        >
          See all
        </button>
      </div>

      {/* Horizontal Snap Slider */}
      <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-2 pr-4">

      {products.map((product) => (
        <div
          key={product.id}
          className="
            snap-start
            flex-shrink-0
            basis-[40%]
            md:basis-[24.5%]
          "
        >
          <ProductCard product={product} />
        </div>
      ))}

    </div>
    </div>
  );
};

export default Section;
