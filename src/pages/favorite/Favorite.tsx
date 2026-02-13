import { useFavoriteStore } from "../../stores/favoriteStore";
import { useCartStore } from "../../stores/cartStore";
import { useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const Favorite = () => {
  const navigate = useNavigate();

  const favorites = useFavoriteStore(
    (state) => state.favorites
  );

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const handleAddAll = () => {
    favorites.forEach((item) => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      });
    });
  };

  return (
    <div className="p-4 pb-32 max-w-md mx-auto">

      <h1 className="text-2xl font-bold text-center mb-6">
        Favourite
      </h1>

      {favorites.length === 0 && (
        <p className="text-center text-gray-500">
          No favorites yet
        </p>
      )}

      {favorites.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between py-4 border-b cursor-pointer"
          onClick={() =>
            navigate(`/product/${item.id}`)
          }
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              className="w-16 h-16 object-cover rounded-lg"
            />

            <div>
              <h3 className="font-semibold">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {item.detail}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-semibold">
              ${item.price}
            </span>
            <FiChevronRight />
          </div>
        </div>
      ))}

      {favorites.length > 0 && (
        <div className="fixed bottom-20 left-0 w-full px-4">
          <button
            onClick={handleAddAll}
            className="w-full bg-primary text-white py-4 rounded-2xl text-lg font-semibold shadow-lg"
          >
            Add All To Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Favorite;
