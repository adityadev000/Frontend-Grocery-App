import { useNavigate } from "react-router-dom";
import onboardingImage from "../../asset/Onboarding.png";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      
      {/* LEFT SIDE (Desktop Image) */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src={onboardingImage}
          alt="Onboarding"
          className="h-full w-full object-cover"
        />
      </div>

      {/* RIGHT SIDE (Content) */}
      <div className="flex-1 relative flex flex-col justify-end lg:justify-center">
        
        {/* MOBILE BACKGROUND IMAGE */}
        <div className="lg:hidden absolute inset-0">
          <img
            src={onboardingImage}
            alt="Onboarding"
            className="h-full w-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 px-6 pb-16 lg:pb-0 text-center lg:text-left max-w-md mx-auto text-white lg:text-black">
          
          {/* Small icon */}
          <div className="text-3xl mb-4">🥕</div>

          <h1 className="text-4xl font-bold leading-tight mb-4">
            Welcome <br /> to our store
          </h1>

          <p className="text-sm mb-8 lg:text-gray-600">
            Get your groceries in as fast as one hour
          </p>

          <button
            onClick={() => navigate("/signin")}
            className="w-full bg-primary py-4 rounded-2xl text-lg font-semibold shadow-lg hover:opacity-90 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
