import { FiEdit2, FiMapPin, FiShoppingBag, FiBell, FiCreditCard, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 pb-28 max-w-3xl mx-auto">

      {/* ================= PROFILE HEADER ================= */}
      <div className="bg-gradient-to-r from-primary to-green-400 rounded-3xl p-6 text-white shadow-md">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Aditya Dev</h2>
            <p className="text-sm opacity-90">aditya@email.com</p>
          </div>

          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
            A
          </div>
        </div>

        <button className="mt-4 flex items-center text-sm">
          <FiEdit2 className="mr-2" />
          Edit Profile
        </button>
      </div>

      {/* ================= ACCOUNT OPTIONS ================= */}
      <div className="mt-8 space-y-4">

        <AccountItem
          icon={<FiShoppingBag />}
          title="My Orders"
          subtitle="View your order history"
          onClick={() => navigate("/orders")}
        />

        <AccountItem
          icon={<FiMapPin />}
          title="Delivery Address"
          subtitle="Manage your addresses"
          onClick={() => navigate("/location")}
        />

        <AccountItem
          icon={<FiCreditCard />}
          title="Payment Methods"
          subtitle="Manage cards & payment"
        />

        <AccountItem
          icon={<FiBell />}
          title="Notifications"
          subtitle="Push notifications & alerts"
        />

      </div>

      {/* ================= LOGOUT ================= */}
      <div className="mt-10">
        <button
          onClick={() => navigate("/login")}
          className="w-full py-4 rounded-2xl border border-red-400 text-red-500 font-semibold flex items-center justify-center hover:bg-red-50 transition"
        >
          <FiLogOut className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;

/* ================= REUSABLE ACCOUNT ITEM ================= */

const AccountItem = ({ icon, title, subtitle, onClick }: any) => (
  <div
    onClick={onClick}
    className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border hover:shadow-md transition cursor-pointer"
  >
    <div className="flex items-center space-x-4">
      <div className="text-primary text-xl">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>
    </div>

    <span className="text-gray-400">{">"}</span>
  </div>
);
