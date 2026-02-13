import { Outlet } from "react-router-dom";
import BottomLayout from "./BottomLayout";

const MainLayout = () => {
  return (
    <div className="min-h-screen pb-20">
      <Outlet />
      <BottomLayout />
    </div>
  );
};

export default MainLayout;
