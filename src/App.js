import "./App.less";
import Topbar from "./components/topbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./page/homepage";
import Header from "./components/header";
import MyAccount from "./page/my-account";
import LogoSlider from "./components/logo-slider";
import ProductsFeatured from "./components/box-products-featured";
import SignUp from "./components/sign-up";
import Footer from "./components/footer";
import CopyRight from "./components/copyright";
import ScrollToTop from "react-scroll-to-top";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "./action/userActions";
import Compare from "./page/compare";
import Shop from "./page/shop";
import Wishlist from "./page/wishlist";
import ProductDetail from "./page/product-detail";
import ErrorPage from "./page/404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOut from "./page/check-out";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const token = localStorage.getItem("user_token");
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser(token));
  });

  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
      }}
    >
      <div className="wrapper">
        <ScrollToTop
          style={{ borderRadius: "50%", background: "#6c757d" }}
          smooth
          component={
            <i class="fa-solid fa-angle-up" style={{ color: "#ddd" }}></i>
          }
        />
        <Topbar />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/my-account/*" element={<MyAccount />}></Route>
          <Route path="/cart" element={<CheckOut />}></Route>
          <Route path="/compare" element={<Compare />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <div className="container">
          <LogoSlider />
          <ProductsFeatured />
        </div>
        <SignUp />
        <Footer />
        <CopyRight />
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
