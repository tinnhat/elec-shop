import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import MainHeader from "../../components/main-header";
import ProductDetailExample from "../../components/product-example";
import Zoom from "react-img-zoom";
import "./style.scss";
import { addToCart } from "../../action/cartActions";
import ReactImageZoom from "react-image-zoom";
import { addToWishlist, removeWishlist } from "../../action/wishlistActions";
const ProductDetail = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { id } = useParams(); //lay id cua san pham
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [addWishlist, setAddWishlist] = useState(false);
  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
    setAddWishlist(true);
  };
  const handleRemoveWishlist = (id) => {
    dispatch(removeWishlist(id));
    setAddWishlist(false);
  };
  const getAllProduct = async () => {
    const res = await axios.get(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/product"
    );

    res.data.data.map((product) => {
      if (product._id === id) {
        const newPro = { ...product, quantity: +ref.current.value };
        setCurrentProduct(newPro);
        setImgUrl(
          `https://hidden-fjord-17428.herokuapp.com/uploads/${newPro?.image}`
        );
      }
    });
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  const handleAddtoCart = (product) => {
    const proAddCart = { ...product, quantity: +ref.current.value };
    dispatch(addToCart(proAddCart));
  };
  const handleLoadingAdd = () => {
    toast.success("Add Product Successfully");
    setTimeout(() => {
      setLoadingAdd(false);
    }, 2000);
  };
  return (
    <div className="product-detail">
      <MainHeader />
      <div className="container">
        <div className="url-title">
          <a href="/" className="url-home">
            Home
          </a>
          <i className="fa-solid fa-chevron-right icon-right"></i>
          {currentProduct?.category.map((cate, idx) => {
            return (
              <div key={idx}>
                <span className="url-page-current ">
                  <a href="" className="btn-cate">
                    {cate.sub_name}
                  </a>
                </span>
                <i className="fa-solid fa-chevron-right icon-right ml-10"></i>
              </div>
            );
          })}

          <span className="url-page-current">{currentProduct?.name}</span>
        </div>
        <div className="content-product-page">
          <div className="sidebar">
            <div className="sidebar-cate-box"></div>
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/02/shop-sidebar-ad-banner.jpg"
              alt=""
              className="banner-product-page"
            />
          </div>
          <div className="product-info-box">
            <div className="box-product-info-top">
              <div className="box-img-info-product">
                {imgUrl ? (
                  <Zoom
                    img={imgUrl}
                    zoomScale={1.6}
                    height={450}
                    width={450}
                    transitionTime={0.5}
                  />
                ) : (
                  <img
                    src={`https://hidden-fjord-17428.herokuapp.com/uploads/${currentProduct?.image}`}
                    alt=""
                    className="img-product-info"
                  />
                )}
              </div>
              <div className="box-product-content-right">
                <p className="product-all-cate">
                  {currentProduct?.category.map((cate, idx) => {
                    return (
                      <a href="" className="product-link-cate" key={idx}>
                        {cate.sub_name},
                      </a>
                    );
                  })}
                </p>
                <p className="product-name">{currentProduct?.name}</p>
                <div className="box-product-wishlist-compare">
                  {addWishlist ? (
                    <button
                      className="btn-wishlish"
                      style={{ color: "red" }}
                      onClick={() => handleRemoveWishlist(currentProduct._id)}
                    >
                      <i className="fa-solid fa-heart"></i> Remove Wishlist
                    </button>
                  ) : (
                    <button
                      className="btn-wishlish"
                      onClick={() => handleAddToWishlist(currentProduct)}
                    >
                      <i className="fa-solid fa-heart"></i> Wishlist
                    </button>
                  )}

                  <button className="btn-compare">
                    <i className="fa-solid fa-code-compare"></i> Compare
                  </button>
                </div>
                <ul className="infomation-product-list">
                  <li className="text-infomation-product">
                    Active noise cancellation for immersive sound
                  </li>
                  <li className="text-infomation-product">
                    Three sizes of soft, tapered silicone tips for a
                    customisable fit
                  </li>
                </ul>
                {currentProduct?.origin_price ===
                currentProduct?.promotion_price ? (
                  <p className="product-price-one">
                    ${currentProduct?.origin_price}.00
                  </p>
                ) : (
                  <>
                    <p className="product-price">
                      ${currentProduct?.origin_price}.00
                    </p>
                    <p className="product-price-promotion">
                      ${currentProduct?.promotion_price}.00
                    </p>
                  </>
                )}

                <div className="box-quantity-add-cart">
                  <input
                    type="number"
                    name=""
                    id=""
                    defaultValue={1}
                    min={1}
                    max={99999}
                    ref={ref}
                  />
                  {loadingAdd ? (
                    <button className=" adding-to-cart">
                      <i className="fa-solid fa-cart-shopping"></i> Adding to
                      cart
                    </button>
                  ) : (
                    <button
                      className="btn-add-cart-big"
                      onClick={() => {
                        handleAddtoCart(currentProduct);
                        setLoadingAdd(true);
                        handleLoadingAdd();
                      }}
                    >
                      <i className="fa-solid fa-cart-arrow-down"></i> Add to
                      cart
                    </button>
                  )}
                </div>
              </div>
            </div>
            <ProductDetailExample />
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default ProductDetail;
