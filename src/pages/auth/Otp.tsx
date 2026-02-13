import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    navigate("/location");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-white">
      
      {/* Soft Gradient Background */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-200 opacity-30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-300 opacity-30 rounded-full blur-3xl pointer-events-none" />

      {/* Desktop Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-50">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4">
            Verify Your Number
          </h2>
          <p className="text-gray-500">
            Enter the 4-digit OTP sent to your mobile.
          </p>
        </div>
      </div>

      {/* Right / Mobile Section */}
      <div className="flex-1 px-6 py-10 max-w-md mx-auto w-full relative z-10">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-xl mb-6"
        >
          ←
        </button>

        <h1 className="text-2xl font-bold mb-6">
          Enter your 4-digit code
        </h1>

        <label className="text-gray-500 text-sm">
          Code
        </label>

        {/* OTP Inputs */}
        <div className="flex gap-4 mt-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) =>
                handleChange(e.target.value, index)
              }
              onKeyDown={(e) =>
                handleBackspace(e, index)
              }
              className="w-12 h-12 text-center text-xl border-b-2 border-gray-400 outline-none focus:border-primary bg-transparent"
            />
          ))}
        </div>

        {/* Divider */}
        <div className="border-b mb-6" />

        {/* Resend */}
        <button className="text-primary font-medium">
          Resend Code
        </button>

        {/* Floating Next Button */}
        <button
          onClick={handleSubmit}
          className="absolute bottom-10 right-6 bg-primary text-white w-14 h-14 rounded-full text-2xl flex items-center justify-center shadow-lg hover:scale-105 transition"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Otp;
