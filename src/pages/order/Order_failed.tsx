import { useNavigate } from "react-router-dom";
import paymentFailed from "../../asset/order_failed.png";
import { FiX } from "react-icons/fi";

interface Props {
  open: boolean;
  onClose: () => void;
}

const OrderFailedModal = ({ open, onClose }: Props) => {
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">


      <div className="bg-white w-full max-w-sm rounded-3xl p-6 relative text-center animate-fadeIn">


        <button
          onClick={onClose}
          className="absolute top-5 left-5 text-gray-500"
        >
          <FiX size={22} />
        </button>


        <div className="flex justify-center mb-6 mt-4">
          <img
            src={paymentFailed}
            alt="Payment Failed"
            className="w-40"
          />
        </div>


        <h2 className="text-2xl font-bold mb-3">
          Oops! Order Failed
        </h2>


        <p className="text-gray-500 text-sm mb-8">
          Something went terribly wrong.
        </p>


        <button
          onClick={onClose}
          className="w-full py-4 bg-primary text-white rounded-2xl font-semibold mb-4"
        >
          Please Try Again
        </button>


        <button
          onClick={() => navigate("/home")}
          className="text-gray-700 font-medium"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default OrderFailedModal;
