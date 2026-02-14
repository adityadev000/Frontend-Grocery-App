import { useNavigate } from "react-router-dom";
import loginImage from "../../asset/login.png";

const Signin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      

      <div className="hidden lg:block lg:w-1/2">
        <img
          src={loginImage}
          alt="Login"
          className="h-full w-full object-cover"
        />
      </div>


      <div className="flex-1 w-full">


        <div className="lg:hidden">
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-72 object-cover"
          />
        </div>


        <div className="px-6 py-8 max-w-md mx-auto">

          <h1 className="text-3xl font-bold mb-6 leading-tight">
            Get your groceries <br /> with nectar
          </h1>


          <div className="flex items-center gap-2 border-b pb-3 mb-6 text-lg">
            🌍
            <span onClick={() => navigate("/phone")}
            >+880</span>
          </div>


          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-400 text-sm whitespace-nowrap">
              Or connect with social media
            </span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>


          <button
            className="w-full bg-blue-500 text-white py-4 rounded-2xl text-lg font-semibold mb-4"
            onClick={() => navigate("/otp")}
          >
            Continue with Google
          </button>


          <button
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl text-lg font-semibold"
            onClick={() => navigate("/otp")}
          >
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
