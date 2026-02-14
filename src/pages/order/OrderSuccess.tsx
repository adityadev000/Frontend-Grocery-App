import { useNavigate } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between items-center px-6 py-10 bg-white">


      <div />


      <div className="text-center">


        <div className="relative flex items-center justify-center mb-8">
          

          <div className="absolute w-40 h-40 bg-primary/20 rounded-full animate-ping" />


          <div className="w-36 h-36 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <FiCheck size={60} className="text-white" />
          </div>
        </div>


        <h1 className="text-2xl font-bold mb-4">
          Your Order has been accepted
        </h1>

        <p className="text-gray-500 text-sm max-w-xs mx-auto">
          Your items has been placed and is on
          it's way to being processed
        </p>
      </div>


      <div className="w-full space-y-4">
        <button
          onClick={() => navigate("/track")}
          className="w-full py-4 bg-primary text-white rounded-2xl font-semibold"
        >
          Track Order
        </button>

        <button
          onClick={() => navigate("/home")}
          className="w-full text-gray-700 font-medium"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
