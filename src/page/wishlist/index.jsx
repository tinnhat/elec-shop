import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeWishlist } from "../../action/wishlistActions";
import MainHeader from "../../components/main-header";
import "./style.scss";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const arrWishlist = useSelector((state) => state.wishlistReducer.wishlist);
  if (arrWishlist.length !== 0) {
    arrWishlist.map((product, idx) => {
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
  const handleRemoveItemWishlist = (id) => {
    dispatch(removeWishlist(id));
  };
  return (
    <>
      <MainHeader />
      <section className="wishlist">
        <div className="container">
          <div className="url-title">
            <a href="/" className="url-home">
              Home
            </a>
            <i className="fa-solid fa-chevron-right icon-right"></i>
            <span className="url-page-current">Wishlist</span>
          </div>
          <div className="box-wishlist">
            <h2 className="wishlist-title">My wishlist </h2>
            <div className="box-products-wishlist">
              {arrWishlist.length === 0 ? (
                <p className="wishlist-text">No product added</p>
              ) : (
                arrWishlist.map((product, idx) => {
                  return (
                    <div className="product-item" key={idx}>
                      <div
                        className="remove-box-wishlist"
                        onClick={() => handleRemoveItemWishlist(product._id)}
                      >
                        <i className="fa-solid fa-xmark icon-remove-wishlist"></i>
                      </div>
                      <a
                        href=""
                        className="box-item"
                        onClick={() => navigate(`/product/${product._id}`)}
                      >
                        <img
                          src={`https://hidden-fjord-17428.herokuapp.com/uploads/${product.image}`}
                          alt=""
                          className="product-img-wishlist"
                        />
                        <p className="product-wishlsit-name">{product.name}</p>
                      </a>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Wishlist;
