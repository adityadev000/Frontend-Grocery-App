import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

import carrotImage from "../../asset/carrot.png";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = () => {
    if (email && password) {
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-white">
      

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-200 opacity-30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-300 opacity-30 rounded-full blur-3xl pointer-events-none" />


      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-50">
        <div className="max-w-md text-center">
          <img src={carrotImage} alt="Carrot" className="w-20 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
          <p className="text-gray-500">
            Login to continue shopping fresh groceries.
          </p>
        </div>
      </div>


      <div className="flex-1 px-6 py-10 max-w-md mx-auto w-full relative z-10">
        

        <div className="flex justify-center mb-[30%] pt-[10%] lg:hidden">
          <img src={carrotImage} alt="Carrot" className="w-14" />
        </div>

        <h1 className="text-2xl font-bold mb-2">
          Logging
        </h1>

        <p className="text-gray-500 mb-8">
          Enter your emails and password
        </p>


        <label className="text-gray-500 text-sm">
          Email
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full border-b py-3 mb-6 outline-none bg-transparent"
        />


        <label className="text-gray-500 text-sm">
          Password
        </label>

        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border-b py-3 pr-10 outline-none bg-transparent"
          />


            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 top-3 text-gray-500 hover:text-gray-700 transition"
            >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>

        </div>


        <div className="flex justify-end mb-8">
          <button className="text-sm text-gray-600">
            Forgot Password?
          </button>
        </div>


        <button
          onClick={handleLogin}
          className="w-full bg-primary text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:opacity-90 transition"
        >
          Log In
        </button>


        <div className="text-center mt-6">
          <span className="text-gray-600">
            Don’t have an account?{" "}
          </span>
          <button onClick={()=> {navigate("/signup")}} className="text-primary font-medium">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
