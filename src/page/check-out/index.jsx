import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addToCart, removeItem } from "../../action/cartActions";
import MainHeader from "../../components/main-header";
import { useArrayRef } from "../../hooks/useArrayRef";
import "./style.scss";
const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartReducer.cart);
  const user = useSelector((state) => state.userReducer.currentUser);
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const [elements, ref] = useArrayRef();
  if (cart.length !== 0) {
    cart.map((product, idx) => {
      return (
        <div className="product-item" key={idx}>
          <i className="fa-solid fa-xmark"></i>
          <a href="" className="box-item">
            <img
              src={`https://hidden-fjord-17428.herokuapp.com/uploads/${product.image}`}
              alt=""
              className="product-img-wishlist"
            />
            <p className="product-wishlsit-name">{product.name}</p>
          </a>
        </div>
      );
    });
  }
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  const removeAfterCheckout = (cart) => {
    for (let i = 0; i < cart.length; i++) {
      dispatch(removeItem(cart[i]._id));
    }
  };
  const handleUpdateCart = () => {
    for (let i = 0; i < elements.length; i++) {
      const idx = cart.findIndex((val) => val._id === elements[i].id);
      const newProduct = {
        ...cart[idx],
        quantity: elements[i].value - cart[idx].quantity,
      };
      dispatch(addToCart(newProduct));
    }
  };
  const subTotal = cart.reduce((acc, val) => {
    return acc + val.quantity * val.promotion_price;
  }, 0);
  const handleApprove = (orderId) => {
    setPaidFor(true);
  };
  if (paidFor) {
    alert("Thank you for purchasing");
  }
  if (error) {
    alert(error);
  }
  const date = new Date();
  const handleFocusCheckout = () => {
    if (user === null) {
      alert("Please login to be able to pay");
    } else {
      alert("Only support payment via paypal");
    }
  };
  return (
    <PayPalScriptProvider>
      <div className="check-out-page">
        <MainHeader />
        <section className="check-out">
          <div className="container">
            <div className="check-out-container">
              <div className="url-title">
                <a href="/" className="url-home">
                  Home
                </a>
                <i className="fa-solid fa-chevron-right icon-right"></i>
                <span className="url-page-current">Cart</span>
              </div>
              <div className="cart">
                <h1 className="cart-title">Cart</h1>

                <div className="cart-container">
                  <div className="box-cart-items">
                    <div className="row">
                      <div className="col-6">
                        <p className="title-table">Product</p>
                      </div>
                      <div className="col-2">
                        <p className="title-table">Price</p>
                      </div>
                      <div className="col-2">
                        <p className="title-table">Quantity</p>
                      </div>
                      <div className="col-2">
                        <p className="title-table">Subtotal</p>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-cart">
                    {cart.length === 0 ? (
                      // <p className="no-product">No product addded</p>
                      <div class="group-text" style={{ marginTop: "20px" }}>
                        <p>No product has been added.</p>
                      </div>
                    ) : (
                      cart.map((product) => {
                        return (
                          <div className="item-box" key={product._id}>
                            <div className="row">
                              <div className="col-6">
                                <div className="item-child-box">
                                  <button
                                    className="remove-item"
                                    onClick={() =>
                                      handleRemoveItem(product._id)
                                    }
                                  >
                                    <i className="fa-solid fa-xmark icon-remove"></i>
                                  </button>
                                  <a
                                    href=""
                                    className="item-link"
                                    onClick={() =>
                                      navigate(`/product/${product._id}`)
                                    }
                                  >
                                    <img
                                      src={`https://hidden-fjord-17428.herokuapp.com/uploads/${product.image}`}
                                      alt={product.name}
                                      className="item-child-img"
                                    />
                                    <p className="item-child-name">
                                      {product.name}
                                    </p>
                                  </a>
                                </div>
                              </div>
                              <div className="col-2">
                                <p className="item-child-price">
                                  $ {product.promotion_price}.00
                                </p>
                              </div>
                              <div className="col-2">
                                <div className="box-flex">
                                  <input
                                    id={product._id}
                                    ref={ref}
                                    type="number"
                                    className="item-input-quantity"
                                    defaultValue={product.quantity}
                                    min={1}
                                    max={9999}
                                  />
                                </div>
                              </div>
                              <div className="col-2">
                                <p className="item-child-total-price">
                                  $ {product.promotion_price * product.quantity}
                                  .00
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>

                  {cart.length === 0 ? (
                    ""
                  ) : (
                    <>
                      <div className="box-update-checkout">
                        <div className="box-coupon">
                          <input type="text" className="box-coupon-input" />
                          <button className="btn-apply-coupon">
                            Apply coupon
                          </button>
                        </div>
                        <div className="box-update">
                          <button
                            className="btn-update-cart"
                            onClick={handleUpdateCart}
                          >
                            Update cart
                          </button>
                          <button
                            className="btn-check-out"
                            onClick={handleFocusCheckout}
                          >
                            Proceed to checkout
                          </button>
                          {user && (
                            <PayPalButtons
                              disabled={false}
                              fundingSource={undefined}
                              onClick={(data, actions) => {
                                const hasAlreadyBoughtCourse = false;
                                if (hasAlreadyBoughtCourse) {
                                  setError("You Already bough this course");
                                  return actions.reject();
                                } else {
                                  return actions.resolve();
                                }
                              }}
                              createOrder={(data, actions) => {
                                return actions.order
                                  .create({
                                    purchase_units: [
                                      {
                                        reference_id: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
                                        amount: {
                                          currency_code: "USD",
                                          value: `${subTotal + 50}`,
                                        },
                                      },
                                    ],
                                  })
                                  .then((orderId) => {
                                    // Your code here after create the order
                                    return orderId;
                                  });
                              }}
                              onApprove={function (data, actions) {
                                removeAfterCheckout(cart);
                                toast.success("Checkout Successfully !");
                                return actions.order
                                  .capture()
                                  .then(function () {});
                              }}
                              onCancel={() => {
                                toast.info("PayPal Checkout has canceled");
                              }}
                              onError={(err) => {
                                setError(err);
                                toast.error("PayPal Checkout Error");
                                console.log("PayPal Checkout Error", err);
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <div className="cart-collaterals">
                        <h2 className="cart-total">Cart totals</h2>
                        <p className="cart-sub-total">
                          <p className="text">Subtotal</p>
                          <span>${subTotal}.00</span>
                        </p>
                        <h2 className="cart-title">Shipping</h2>
                        <p className="plat-rate">
                          <p className="text">Flat rate:</p>
                          <span>$50.00</span>
                        </p>
                        <h2 className="cart-total-price">
                          <p className="text">Total</p>
                          <span>${subTotal + 50}.00</span>
                        </h2>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer
          position="bottom-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </PayPalScriptProvider>
  );
};
export default CheckOut;
