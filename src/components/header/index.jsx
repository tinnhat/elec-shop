import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { removeItem } from "../../action/cartActions";
import logo from "../../assets/logo.png";
import "./style.scss";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const productSearch = searchParams.get("name") || "";
  const cart = useSelector((state) => state.cartReducer.cart);
  const [keySearch, setKeySearch] = useState("");
  const [optionSearch, setoptionSearch] = useState("All Categories");
  const [allCate, setAllCate] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const getAllCate = async () => {
    const data = await axios.get(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/category"
    );
    setAllCate(data.data.data);
  };

  useEffect(() => {
    getAllCate();
  }, []);

  const onSearch = (e) => {
    setKeySearch(e.target.value);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleSeach = () => {
    if (!keySearch) {
      alert("Please enter the name of the product you are looking for!");
      return;
    }
    const name = { keySearch, optionSearch };
    if (name) {
      setSearchParams(name);
    } else {
      setSearchParams({});
    }
  };
  const handleSelect = (e) => {
    setoptionSearch(e.target.value);
  };
  const handleShowCart = (e) => {
    e.preventDefault();

    setShowCart(!showCart);
  };
  const totalMoney = cart.reduce((acc, val) => {
    return acc + val.promotion_price * val.quantity;
  }, 0);
  const handlleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <header>
      <div className="container">
        <div className="header">
          <a href="/" className="logo">
            <img src={logo} alt="" className="img-logo" />
          </a>

          {/* <div className="box-icon-modal" onClick={showModal}>
            {isModalVisible ? (
              <i className="fa-solid fa-xmark icon-modal"></i>
            ) : (
              <i className="fa-solid fa-bars icon-modal"></i>
            )}
          </div> */}
          <div className="box-input">
            <input
              type="search"
              className="input-search-main"
              onChange={onSearch}
            />
            <select name="All Categories" id="all-cate" onClick={handleSelect}>
              <option value={"All Categories"}>All categories</option>
              {allCate.map((cate, idx) => {
                return (
                  <option value={cate.name} key={idx}>
                    {cate.name}
                  </option>
                );
              })}
            </select>
            <button className="btn-search" onClick={handleSeach}>
              <i className="fa-solid fa-magnifying-glass icon-search"></i>
            </button>
          </div>
          <div className="box-user">
            <ul className="list-user-change">
              <li>
                <a href="/compare" className="icon-user-change">
                  <i className="fa-solid fa-code-compare"></i>
                </a>
              </li>
              <li>
                <a href="/wishlist" className="icon-user-change">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="/my-account" className="icon-user-change">
                  <i className="fa-solid fa-user"></i>
                </a>
              </li>
              <li className="cart-position">
                <a
                  href=""
                  className="icon-user-change"
                  onClick={handleShowCart}
                >
                  <div className="box-cart-number">
                    <i className="fa-solid fa-cart-shopping"></i>

                    {cart.length === 0 ? (
                      <span
                        className="cart-number"
                        style={{ display: "none" }}
                      ></span>
                    ) : (
                      <span className="cart-number">{cart.length}</span>
                    )}
                  </div>
                  <span className="total-price">
                    <span className="total-money-cart">
                      <i className="fa-solid fa-dollar-sign"></i> {totalMoney}
                      .00
                    </span>
                  </span>
                </a>
                {showCart && cart.length !== 0 && (
                  <div className="cart-info">
                    <div className="porduct-in-cart">
                      <ul className="product-cart-list">
                        {cart.map((product, idx) => {
                          return (
                            <li className="product-cart-item" key={idx}>
                              <img
                                src={`https://hidden-fjord-17428.herokuapp.com/uploads/${product.image}`}
                                alt={product.name}
                                className="product-img"
                              />
                              <div className="product-info">
                                <p className="product-name">
                                  {product.name}
                                  <span className="quantity-number-price">
                                    {product.quantity} x $
                                    {product.promotion_price}
                                  </span>
                                </p>
                              </div>
                              <div
                                className="remove-product-in-cart"
                                onClick={() => handlleRemoveItem(product._id)}
                              >
                                <i className="fa-solid fa-xmark icon-close"></i>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="box-cart-button">
                        <a href="/cart" className="btn-view-cart">
                          View Cart
                        </a>
                        <a href="/cart" className="btn-checkout">
                          Check out
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
