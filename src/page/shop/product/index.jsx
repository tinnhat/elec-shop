import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../../../action/cartActions";
import { addToWishlist, removeWishlist } from "../../../action/wishlistActions";

const Product = ({ product }) => {
  const [loadingAdd, setLoadingAdd] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const [addWishlist, setAddWishlist] = useState(false);
  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
    setAddWishlist(true);
  };
  const handleRemoveWishlist = (id) => {
    dispatch(removeWishlist(id));
    setAddWishlist(false);
  };
  const handleLoadingAdd = () => {
    toast.success("Add Product Sucessfully");

    setTimeout(() => {
      setLoadingAdd(false);
    }, 2000);
  };
  const handleClickProduct = (e) => {
    // e.preventDefault();
    navigate(`/product/${product._id}`);
  };
  return (
    <a href="" className="product-item-link" onClick={handleClickProduct}>
      <a href="" className="product-item-categories">
        {product.category.map((cate) => {
          return <span key={cate._id}>{cate.sub_name},</span>;
        })}
      </a>
      <h6 className="product-item-title">{product.name}</h6>
      <div className="img-box-product">
        <img
          src={`https://hidden-fjord-17428.herokuapp.com/uploads/${product.image}`}
          alt=""
          className="product-item-img"
        />
      </div>
      <div className="product-price-add-cart">
        <div className="product-box-price">
          <div className="product-box-price">
            {product.origin_price === product.promotion_price ? (
              <p className="price-product">$ {product.origin_price}.00</p>
            ) : (
              <>
                <p className="price-discount-product">
                  $ {product.promotion_price}.00
                </p>
                <p className="price-product-hide">
                  $ {product.origin_price}.00
                </p>
              </>
            )}
          </div>
        </div>
        {loadingAdd ? (
          <button
            className="add-to-cart"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <i className="fa-solid fa-spinner icon-add-loading"></i>
          </button>
        ) : (
          <button
            className="add-to-cart"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddToCart(product);
              setLoadingAdd(true);
              handleLoadingAdd();
            }}
          >
            <i className="fa-solid fa-cart-plus icon-add-to-cart"></i>
          </button>
        )}
      </div>

      <div className="product-wishlist-compare">
        {addWishlist ? (
          <p
            className="product-add-wishlist"
            style={{ color: "red" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleRemoveWishlist(product._id);
            }}
          >
            <i className="fa-solid fa-heart icon-wishlist"></i> Wishlist
          </p>
        ) : (
          <p
            className="product-add-wishlist"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddToWishlist(product);
            }}
          >
            <i className="fa-solid fa-heart icon-wishlist"></i> Wishlist
          </p>
        )}

        <p className="product-add-compare">
          <i className="fa-solid fa-code-compare icon-add-compare"></i>
          Compare
        </p>
      </div>
    </a>
  );
};
export default Product;
