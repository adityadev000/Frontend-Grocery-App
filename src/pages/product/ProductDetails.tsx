import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/product";
import { useCartStore } from "../../stores/cartStore";
import { useFavoriteStore } from "../../stores/favoriteStore";
import { useState } from "react";
import {
  FiHeart,
  FiChevronDown,
  FiChevronRight,
  FiStar,
  FiArrowLeft,
  FiShare2,
} from "react-icons/fi";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const productId = Number(id);


  const product = products.find(
    (p) => p.id === productId
  );

  if (!product) {
    return (
      <div className="p-10 text-center">
        Product Not Found
      </div>
    );
  }

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const toggleFavorite = useFavoriteStore(
    (state) => state.toggleFavorite
  );

  const isFavorite = useFavoriteStore(
    (state) => state.isFavorite(product.id)
  );

  const [quantity, setQuantity] = useState(1);
  const [openDetail, setOpenDetail] =
    useState(true);

  return (
    <div className="pb-24 max-w-4xl mx-auto">

      <div className="bg-gray-100 rounded-b-3xl p-6 relative">

        <div className="flex justify-between mb-4">
          <FiArrowLeft
            size={22}
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          />
          <FiShare2 size={22} />
        </div>

        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-72 h-72 object-contain rounded-md"
          />
        </div>
      </div>


      <div className="p-6">

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">
              {product.name}
            </h1>
            <p className="text-gray-500">
              1kg, Price
            </p>
          </div>

          <FiHeart
            size={24}
            onClick={() =>
              toggleFavorite({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                detail: product.detail,
              })
            }
            className={`cursor-pointer transition ${
              isFavorite
                ? "text-primary fill-primary"
                : "text-gray-400"
            }`}
          />
        </div>


        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setQuantity((prev) =>
                  prev > 1 ? prev - 1 : 1
                )
              }
              className="text-2xl text-gray-400"
            >
              -
            </button>

            <div className="border rounded-xl px-4 py-2 text-lg">
              {quantity}
            </div>

            <button
              onClick={() =>
                setQuantity((prev) => prev + 1)
              }
              className="text-2xl text-primary"
            >
              +
            </button>
          </div>

          <div className="text-2xl font-bold">
            ${product.price}
          </div>
        </div>

        <hr className="my-6" />


        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setOpenDetail(!openDetail)
            }
          >
            <h3 className="font-semibold text-lg">
              Product Detail
            </h3>
            <FiChevronDown
              className={`transition ${
                openDetail ? "rotate-180" : ""
              }`}
            />
          </div>

          {openDetail && (
            <p className="text-gray-500 mt-3 leading-relaxed">
              {product.detail}
            </p>
          )}
        </div>

        <hr className="my-6" />


        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg">
              Nutritions
            </h3>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
              {product.nutrition}
            </span>
          </div>
          <FiChevronRight />
        </div>

        <hr className="my-6" />


        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">
            Review
          </h3>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <FiStar
                key={index}
                className={
                  index <
                  Math.round(product.rating)
                    ? "text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}
            <FiChevronRight className="ml-2" />
          </div>
        </div>


        <button
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            })
          }
          className="w-full bg-primary text-white py-4 rounded-2xl mt-10 text-lg font-semibold"
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
