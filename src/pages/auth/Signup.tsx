import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiCheck } from "react-icons/fi";
import carrotImage from "../../asset/carrot.png";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isEmailValid = email.includes("@");

  const handleSignup = () => {
    if (username && isEmailValid && password) {
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
          <h2 className="text-3xl font-bold mb-4">Create Account</h2>
          <p className="text-gray-500">
            Join us and start ordering fresh groceries.
          </p>
        </div>
      </div>


      <div className="flex-1 px-6 py-10 max-w-md mx-auto w-full relative z-10">
        

        <div className="flex justify-center mb-[30%] lg:hidden">
          <img src={carrotImage} alt="Carrot" className="w-14" />
        </div>

        <h1 className="text-2xl font-bold mb-2">
          Sign Up
        </h1>

        <p className="text-gray-500 mb-8">
          Enter your credentials to continue
        </p>


        <label className="text-gray-500 text-sm">
          Username
        </label>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="w-full border-b py-3 mb-6 outline-none bg-transparent"
        />


        <label className="text-gray-500 text-sm">
          Email
        </label>

        <div className="relative mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border-b py-3 pr-10 outline-none bg-transparent"
          />

          {isEmailValid && (
            <FiCheck
              size={20}
              className="absolute right-0 top-3 text-primary"
            />
          )}
        </div>


        <label className="text-gray-500 text-sm">
          Password
        </label>

        <div className="relative mb-4">
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


        <p className="text-sm text-gray-500 mb-8">
          By continuing you agree to our{" "}
          <span className="text-primary font-medium">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-primary font-medium">
            Privacy Policy
          </span>.
        </p>


        <button
          onClick={handleSignup}
          className="w-full bg-primary text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:opacity-90 transition"
        >
          Sign Up
        </button>


        <div className="text-center mt-6">
          <span className="text-gray-600">
            Already have an account?{" "}
          </span>
          <button
            onClick={() => navigate("/login")}
            className="text-primary font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
