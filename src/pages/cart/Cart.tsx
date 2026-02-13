import { useState } from "react";
import { useCartStore } from "../../stores/cartStore";
import {
  FiPlus,
  FiMinus,
  FiX,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import OrderFailedModal from "../../pages/order/Order_failed";

const Cart = () => {
  const { cart, increase, decrease, remove } =
    useCartStore();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [showCheckout, setShowCheckout] = useState(false);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate() ; 
  const [showFailed, setShowFailed] = useState(false);



  return (
    <div className="p-4 pb-32 max-w-md mx-auto">

      <h1 className="text-2xl font-bold text-center mb-6">
        My Cart
      </h1>

      {cart.length === 0 && (
        <p className="text-center text-gray-500">
          Your cart is empty
        </p>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 mb-6"
        >
          <img
            src={item.image}
            className="w-20 h-20 object-cover rounded-xl"
          />

          <div className="flex-1">
            <h3 className="font-semibold">
              {item.name}
            </h3>

            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => decrease(item.id)}
                className="w-8 h-8 border rounded-lg flex items-center justify-center"
              >
                <FiMinus />
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increase(item.id)}
                className="w-8 h-8 border rounded-lg flex items-center justify-center text-primary"
              >
                <FiPlus />
              </button>
            </div>
          </div>

          <div className="text-right">
            <button
              onClick={() => remove(item.id)}
              className="text-gray-400 mb-2"
            >
              <FiX />
            </button>

            <p className="font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}

      {/* Checkout */}
      {cart.length > 0 && (
        <div className="fixed bottom-20 left-0 w-full px-4">
          <button
            onClick={() => setShowCheckout(true)}
            className="w-full bg-primary text-white py-4 rounded-2xl font-semibold"
            >
            Go to Checkout
        </button>
        </div>
      )}

      {showCheckout && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black/40 z-[90] "
      onClick={() => setShowCheckout(false)}
    />

    {/* Bottom Sheet */}
    <div className="fixed bottom-0 left-0 w-full bg-white rounded-t-3xl p-6 z-[100] animate-slideUp pb-28">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Checkout
        </h2>
        <button onClick={() => setShowCheckout(false)}>
          ✕
        </button>
      </div>

      {/* Delivery */}
      <Row title="Delivery" value="Select Method" />

      {/* Payment */}
      <Row title="Payment" value="Mastercard" />

      {/* Promo */}
      <Row title="Promo Code" value="Pick discount" />

      {/* Total */}
      <Row
        title="Total Cost"
        value={`$${total.toFixed(2)}`}
      />

      <p className="text-xs text-gray-500 mt-4 mb-6">
        By placing an order you agree to our
        <span className="font-semibold">
          {" "}Terms And Conditions
        </span>
      </p>

        <button
        onClick={() => {
        const isSuccess = Math.random() > 0.5;

        if (isSuccess) {
            navigate("/order-success");
        } else {
            setShowFailed(true);
        }
        }}
        className="w-full bg-primary text-white py-4 rounded-2xl"
        >
        Place Order
        </button>

        <OrderFailedModal
        open={showFailed}
        onClose={() => setShowFailed(false)}
        />
    </div>
  </>
)}

    </div>

    
  );
};
const Row = ({ title, value }: any) => (
  <div className="flex justify-between items-center py-4 border-b">
    <span className="text-gray-500">
      {title}
    </span>
    <div className="flex items-center gap-2">
      <span className="font-medium">
        {value}
      </span>
      <span>›</span>
    </div>
  </div>
);

export default Cart;
