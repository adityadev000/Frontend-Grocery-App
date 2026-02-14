import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mapImage from "../../asset/map.png";
import { useLocationStore } from "../../stores/locationStore";

const zones = ["Banasree", "Gulshan", "Dhanmondi", "Uttara"];
const areas = ["Block A", "Block B", "Block C", "Block D"];

const Location = () => {
  const navigate = useNavigate();
  const setLocation = useLocationStore(
    (state) => state.setLocation
  );

  const [zone, setZone] = useState<string>("Banasree");
  const [area, setArea] = useState<string>("");

  const handleSubmit = () => {
    if (zone && area) {
      setLocation(zone, area);

      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-white">

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-200 opacity-30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-300 opacity-30 rounded-full blur-3xl pointer-events-none" />

      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-50">
        <img src={mapImage} alt="Map" className="w-96" />
      </div>

      <div className="flex-1 px-6 py-10 max-w-md mx-auto w-full relative z-10">

        <button
          onClick={() => navigate(-1)}
          className="text-xl mb-6"
        >
          ←
        </button>

        <div className="flex justify-center mb-6 lg:hidden">
          <img src={mapImage} alt="Map" className="w-40" />
        </div>

        <h1 className="text-2xl font-bold text-center lg:text-left mb-4">
          Select Your Location
        </h1>

        <p className="text-gray-500 text-center lg:text-left mb-8 text-sm">
          Switch on your location to stay in tune with
          what’s happening in your area
        </p>


        <label className="text-gray-500 text-sm">
          Your Zone
        </label>

        <select
          value={zone}
          onChange={(e) => setZone(e.target.value)}
          className="w-full border-b py-3 mb-6 bg-transparent outline-none"
        >
          {zones.map((z) => (
            <option key={z} value={z}>
              {z}
            </option>
          ))}
        </select>


        <label className="text-gray-500 text-sm">
          Your Area
        </label>

        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full border-b py-3 mb-8 bg-transparent outline-none text-gray-700"
        >
          <option value="" disabled>
            Types of your area
          </option>
          {areas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>


        <button
          onClick={handleSubmit}
          disabled={!zone || !area}
          className={`w-full py-4 rounded-2xl text-lg font-semibold shadow-lg transition ${
            zone && area
              ? "bg-primary text-white hover:opacity-90"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Location;
