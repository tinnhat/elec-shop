import { Button, Modal } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainHeader from "../../components/main-header";
import Login from "./components/login";
import Register from "./components/register";
import SyncLoader from "react-spinners/SyncLoader";
import "./style.scss";
import DashBoard from "./components/Dashboard/DashBoard";
import AccountDetail from "./components/AccountDetail/AccountDetail";
import Orders from "./components/Orders/Orders";
import Addresses from "./components/Addresses/Addresses";
import Payment from "./components/Payment/Payment";
import { logout } from "../../action/userActions";
import { Route, Routes, useNavigate } from "react-router-dom";
const MyAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.currentUser);
  const isLoading = useSelector((state) => state.loadingReducer.isLoading);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleLogOut = () => {
    dispatch(logout());
  };
  const showModal = (show) => {
    setIsModalVisible(show);
  };
  return (
    <section className="my-account">
      <MainHeader />
      <div className="container">
        <div className="url-title">
          <a href="/" className="url-home">
            Home
          </a>
          <i className="fa-solid fa-chevron-right icon-right"></i>{" "}
          <span className="url-page-current">My Account</span>
        </div>
        {user ? (
          <>
            <h1 style={{ textAlign: "center", fontSize: "40px" }}>
              Welcome {user?.username || user?.user?.username}
            </h1>
            <div className="box-profile-user">
              <nav className="menu-profile">
                <ul className="menu-profile-list">
                  <li className="menu-profile-item">
                    <a
                      onClick={() => navigate("dasboard")}
                      className="menu-profile-item-link"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="menu-profile-item">
                    <a
                      onClick={() => navigate("orders")}
                      className="menu-profile-item-link"
                    >
                      Orders
                    </a>
                  </li>
                  <li className="menu-profile-item">
                    <a
                      onClick={() => navigate("detail")}
                      className="menu-profile-item-link"
                    >
                      Account Detail
                    </a>
                  </li>
                  <li className="menu-profile-item">
                    <a
                      onClick={() => navigate("address")}
                      className="menu-profile-item-link"
                    >
                      Address
                    </a>
                  </li>
                  <li className="menu-profile-item">
                    <a
                      className="menu-profile-item-link"
                      onClick={() => navigate("payment")}
                    >
                      Payment
                    </a>
                  </li>
                  <li className="menu-profile-item">
                    <a
                      className="menu-profile-item-link"
                      onClick={handleLogOut}
                    >
                      Log out
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="box-user-infomation">
                <Routes>
                  <Route path="dasboard" element={<DashBoard />}></Route>
                  <Route path="orders" element={<Orders />}></Route>
                  <Route path="detail" element={<AccountDetail />}></Route>
                  <Route path="address" element={<Addresses />}></Route>
                  <Route path="payment" element={<Payment />}></Route>
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <div className="section-login-reg">
            <Login showModal={showModal} />
            <Register showModal={showModal} />
          </div>
        )}
      </div>

      <Modal
        className="modal-loading"
        centered
        visible={isLoading}
        footer={false}
        // confirmLoading={isModalVisible}
      >
        <SyncLoader color={"#36D7B7"} loading={isLoading} size={20} />
      </Modal>
    </section>
  );
};
export default MyAccount;
