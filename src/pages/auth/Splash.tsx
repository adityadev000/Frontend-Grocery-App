import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import carrotImage from "../../asset/carrot.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center z-10">
        <img
          src={carrotImage}
          alt="Logo"
          className="w-20 mx-auto mb-6"
        />

        <h1 className="text-3xl font-bold text-white">
          Nectar
        </h1>
      </div>
    </div>
  );
};

export default Splash;
