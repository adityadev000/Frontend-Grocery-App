import { useCartStore } from "../../stores/cartStore";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../data/product";



interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl p-4 shadow-md hover:shadow-lg transition">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-32 object-contain mx-auto mb-4 cursor-pointer rounded-md"
        onClick={() => navigate(`/product/${product.id}`)}
      />

      {/* Product Name */}
      <h3 className="font-semibold text-lg mb-1">
        {product.name}
      </h3>

      {/* Nutrition / Short Detail */}
      <p className="text-gray-500 text-sm mb-4">
        {product.nutrition}
      </p>

      {/* Price + Add */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">
          ${product.price}
        </span>

       <button
        onClick={() =>
          addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
          })
        }
        className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:scale-105 transition"
>
  +
</button>
      </div>
    </div>
  );
};

export default ProductCard;
