import { NavLink } from "react-router-dom";
import {
  FiShoppingBag,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
} from "react-icons/fi";

const BottomLayout = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md rounded-t-2xl z-50">

      <div className="flex justify-around items-center py-3 max-w-4xl mx-auto">

        <NavItem to="/home" icon={<FiShoppingBag />} label="Shop" />
        <NavItem to="/explore" icon={<FiSearch />} label="Explore" />
        <NavItem to="/cart" icon={<FiShoppingCart />} label="Cart" />
        <NavItem to="/favorites" icon={<FiHeart />} label="Favourite" />
        <NavItem to="/account" icon={<FiUser />} label="Account" />

      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center text-xs transition-all duration-200 ${
          isActive
            ? "text-primary"
            : "text-gray-500"
        }`
      }
    >
      <div className="text-xl mb-1">{icon}</div>
      {label}
    </NavLink>
  );
};

export default BottomLayout;
