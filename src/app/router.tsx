import { createBrowserRouter } from "react-router-dom";

import Splash from "../pages/auth/Splash";
import Onboarding from "../pages/auth/Onboarding";
import Signin from "../pages/auth/Signin";
import PhoneNumber from "../pages/auth/PhoneNumber";
import Otp from "../pages/auth/Otp";
import Location from "../pages/auth/Location";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Explore from "../pages/explore/Explore";
import Cart from "../pages/cart/Cart";
import Favorite from "../pages/favorite/Favorite";
import OrderSuccess from "../pages/order/OrderSuccess";
import Account from "../pages/account/Account";



import Home from "../pages/home/Home";
import ProductDetails from "../pages/product/ProductDetails";

import MainLayout from "../components/layout/MainOutlet"

export const router = createBrowserRouter([
  // Auth routes (no bottom nav)
  { path: "/", element: <Splash /> },
  { path: "/onboarding", element: <Onboarding /> },
  { path: "/signin", element: <Signin /> },
  { path: "/otp", element: <Otp /> },
  { path: "/location", element: <Location /> },
  { path: "/phone", element: <PhoneNumber /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/order-success", element: <OrderSuccess /> },

  // App routes (with bottom nav)
  {
    element: <MainLayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/product/:id", element: <ProductDetails /> },

      // You can add these later:
      { path: "/cart", element: <Cart /> },
      { path: "/favorites", element: <Favorite /> },
      { path: "/explore", element: <Explore /> },
      { path: "/account", element: <Account /> },
    ],
  },
]);
