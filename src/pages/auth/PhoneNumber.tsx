import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "../../data/country";

const PhoneNumber = () => {
  const navigate = useNavigate();
  const [dialCode, setDialCode] = useState("+880");
  const [number, setNumber] = useState("");

  const selectedCountry =
    countries.find((c) => c.dialCode === dialCode) || countries[0];

  const handleDialCodeChange = (value: string) => {
    setDialCode(value);

    const match = countries.find((c) =>
      value.startsWith(c.dialCode)
    );

    if (match) {
      setDialCode(match.dialCode);
    }
  };

  const handleSubmit = () => {
    navigate("/otp");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-white">
      

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-200 opacity-30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-300 opacity-30 rounded-full blur-3xl pointer-events-none" />


      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-50">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4">
            Welcome Back
          </h2>
          <p className="text-gray-500">
            Enter your mobile number to continue shopping.
          </p>
        </div>
      </div>


      <div className="flex-1 px-6 py-10 max-w-md mx-auto w-full relative z-10">
        

        <button
          onClick={() => navigate(-1)}
          className="text-xl mb-6"
        >
          ←
        </button>

        <h1 className="text-2xl font-bold mb-6">
          Enter your mobile number
        </h1>

        <label className="text-gray-500 text-sm">
          Mobile Number
        </label>


        <div className="flex items-center gap-3 border-b py-3 text-lg">
          <span className="text-2xl">
            {selectedCountry.flag}
          </span>

          <input
            type="text"
            value={dialCode}
            onChange={(e) =>
              handleDialCodeChange(e.target.value)
            }
            className="w-20 outline-none bg-transparent"
          />

          <input
            type="tel"
            placeholder="Enter number"
            value={number}
            onChange={(e) =>
              setNumber(e.target.value)
            }
            className="flex-1 outline-none bg-transparent"
          />
        </div>


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

export default PhoneNumber;

