import Slider from "react-slick";
import img4 from "../../../assets/appipad.png";
import img5 from "../../../assets/cam4k.png";
import img1 from "../../../assets/img/featured1.png";
import img2 from "../../../assets/img/featured2.png";
import img3 from "../../../assets/img/featured3.png";
import img6 from "../../../assets/occlod.png";
import "./style.scss";
const RecommendedSliderProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleCLickBuy = (e) => {
    e.preventDefault();
    alert("Vui lòng thêm sản phẩm ở phần Shop, Xin cảm ơn !");
  };
  return (
    <div className="box-slider-recommend-product">
      <Slider {...settings}>
        <div className="recommend-product-box">
          <a
            href=""
            className="recommend-product-link"
            onClick={(e) => handleCLickBuy(e)}
          >
            <a className="categories-product-recommend">Smartphones</a>
            <h6 className="product-name-recommend">
              Tablet Thin EliteBook Revolve 810 G6
            </h6>
            <div className="img-box-product-recommend">
              <img src={img1} alt="" className="product-recommend-img" />
            </div>
            <div className="box-price-cart-product-recommend">
              <p className="price-recommend-product">$1,300.00</p>
              <i className="fa-solid fa-cart-plus icon-add-to-cart"></i>
            </div>
            <div className="box-wishlist-compare">
              <p className="add-wishlist">
                <i className="fa-solid fa-heart icon-wishlist"></i> Wishlist
              </p>
              <p className="add-compare">
                <i className="fa-solid fa-code-compare icon-add-compare"></i>
                Compare
              </p>
            </div>
          </a>
        </div>
        <div className="recommend-product-box">
          <a
            href=""
            className="recommend-product-link"
            onClick={(e) => handleCLickBuy(e)}
          >
            <a className="categories-product-recommend">Smartphones</a>
            <h6 className="product-name-recommend">
              Tablet Thin EliteBook Revolve 810 G6
            </h6>
            <div className="img-box-product-recommend">
              <img src={img2} alt="" className="product-recommend-img" />
            </div>
            <div className="box-price-cart-product-recommend">
              <p className="price-recommend-product">$1,300.00</p>
              <i className="fa-solid fa-cart-plus icon-add-to-cart"></i>
            </div>
            <div className="box-wishlist-compare">
              <p className="add-wishlist">
                <i className="fa-solid fa-heart icon-wishlist"></i> Wishlist
              </p>
              <p className="add-compare">
                <i className="fa-solid fa-code-compare icon-add-compare"></i>
                Compare
              </p>
            </div>
          </a>
        </div>
        <div className="recommend-product-box">
          <a
            href=""
            className="recommend-product-link"
            onClick={(e) => handleCLickBuy(e)}
          >
            <a className="categories-product-recommend">Smartphones</a>
            <h6 className="product-name-recommend">
              Tablet Thin EliteBook Revolve 810 G6
            </h6>
            <div className="img-box-product-recommend">
              <img src={img3} alt="" className="product-recommend-img" />
            </div>
            <div className="box-price-cart-product-recommend">
              <p className="price-recommend-product">$1,300.00</p>
              <i className="fa-solid fa-cart-plus icon-add-to-cart"></i>
            </div>
            <div className="box-wishlist-compare">
              <p className="add-wishlist">
                <i className="fa-solid fa-heart icon-wishlist"></i> Wishlist
              </p>
              <p className="add-compare">
                <i className="fa-solid fa-code-compare icon-add-compare"></i>
                Compare
              </p>
            </div>
          </a>
        </div>
        <div className="recommend-product-box">
          <a
            href=""
            className="recommend-product-link"
            onClick={(e) => handleCLickBuy(e)}
          >
            <a className="categories-product-recommend">Smartphones</a>
            <h6 className="product-name-recommend">
              Tablet Thin EliteBook Revolve 810 G6
            </h6>
            <div className="img-box-product-recommend">
              <img src={img4} alt="" className="product-recommend-img" />
            </div>
            <div className="box-price-cart-product-recommend">
              <p className="price-recommend-product">$1,300.00</p>
              <i className="fa-solid fa-cart-plus icon-add-to-cart"></i>
            </div>
            <div className="box-wishlist-compare">
              <p className="add-wishlist">
                <i className="fa-solid fa-heart icon-wishlist"></i> Wishlist
              </p>
              <p className="add-compare">
                <i className="fa-solid fa-code-compare icon-add-compare"></i>
                Compare
              </p>
            </div>
          </a>
        </div>
        <div className="recommend-product-box">
          <a
            href=""
            className="recommend-product-link"
            onClick={(e) => handleCLickBuy(e)}
          >
            <a className="categories-product-recommend">Smartphones</a>
            <h6 className="product-name-recommend">
              Tablet Thin EliteBook Revolve 810 G6
            </h6>
            <div className="img-box-product-recommend">
              <img src={img5} alt="" className="product-recommend-img" />
            </div>
            <div className="box-price-cart-product-recommend">
              <p className="price-recommend-product">$1,300.00</p>
              <i className="fa-solid fa-cart-plus icon-add-to-cart"></i>
            </div>
            <div className="box-wishlist-compare">
              <p className="add-wishlist">
                <i className="fa-solid fa-heart icon-wishlist"></i> Wishlist
              </p>
              <p className="add-compare">
                <i className="fa-solid fa-code-compare icon-add-compare"></i>
                Compare
              </p>
            </div>
          </a>
        </div>
        <div className="recommend-product-box">
          <a
            href=""
            className="recommend-product-link"
            onClick={(e) => handleCLickBuy(e)}
          >
            <a className="categories-product-recommend">Smartphones</a>
            <h6 className="product-name-recommend">
              Tablet Thin EliteBook Revolve 810 G6
            </h6>
            <div className="img-box-product-recommend">
              <img src={img6} alt="" className="product-recommend-img" />
            </div>
            <div className="box-price-cart-product-recommend">
              <p className="price-recommend-product">$1,300.00</p>
              <i className="fa-solid fa-cart-plus icon-add-to-cart"></i>
            </div>
            <div className="box-wishlist-compare">
              <p className="add-wishlist">
                <i className="fa-solid fa-heart icon-wishlist"></i> Wishlist
              </p>
              <p className="add-compare">
                <i className="fa-solid fa-code-compare icon-add-compare"></i>
                Compare
              </p>
            </div>
          </a>
        </div>
      </Slider>
    </div>
  );
};
export default RecommendedSliderProduct;
