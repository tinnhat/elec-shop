import banner from "../../../assets/img/banner-footer1.jpg";
import featured1 from "../../../assets/img/featured1.png";
import featured2 from "../../../assets/img/featured2.png";
import featured3 from "../../../assets/img/featured3.png";
import onsale1 from "../../../assets/img/onsale1.png";
import onsale2 from "../../../assets/img/onsale2.png";
import onsale3 from "../../../assets/img/onsale3.png";
import sell1 from "../../../assets/img/sell1.png";
import sell2 from "../../../assets/img/sell2.png";
import sell3 from "../../../assets/img/sell3.png";
import "./style.scss";

const ChildProduct = ({ img, title, rating, price, ratingHalf, priceDown }) => {
  return (
    <div className="box-child-product">
      <a href="shop" className="product-child-link">
        <img src={img} alt="" className="img-product-child" />
      </a>
      <div className="box-right-child-product">
        <a href="shop" className="product-child-link">
          <h6 className="chil-product-title">{title}</h6>
        </a>
        <div className="box-product-child-rating">
          {[...Array(rating)].map((e, i) => {
            return <i className="fa-solid fa-star" key={i}></i>;
          })}

          {[...Array(ratingHalf)].map((e, i) => {
            return <i className="fa-solid fa-star-half-stroke" key={i}></i>;
          })}
        </div>
        {priceDown ? (
          <div className="product-child-box-price">
            <p className="text-price-red">${priceDown}</p>
            <p className="price-down">${price}</p>
          </div>
        ) : (
          <p className="product-child-price">${price}</p>
        )}
      </div>
    </div>
  );
};
const CustomFeatureProduct = () => {
  return (
    <div className="box-left-featured">
      <div className="box-featured-products">
        <h5 className="featured-products-title">Featured Products</h5>
        <div className="box-flex-child-product">
          <ChildProduct
            img={featured1}
            title="Tablet Thin EliteBook Revolve 810 G6"
            rating={4}
            ratingHalf={1}
            price={"1,300.00"}
          />
          <ChildProduct
            img={featured2}
            title="Notebook Widescreen Z51-70 40K6013UPB"
            rating={4}
            ratingHalf={1}
            price={"1,100.00"}
          />
          <ChildProduct
            img={featured3}
            title="Smartphone 6S 128GB LTE"
            price={"780.00"}
            rating={0}
            ratingHalf={0}
            priceDown={"750.00"}
          />
        </div>
      </div>
      <div className="box-featured-products">
        <h5 className="featured-products-title">Top Selling Products</h5>
        <div className="box-flex-child-product">
          <ChildProduct
            img={sell1}
            title="Game Console Controller + USB 3.0 Cable"
            rating={0}
            ratingHalf={0}
            price={"99.00"}
            priceDown={"79.00"}
          />
          <ChildProduct
            img={sell2}
            title="Wireless Audio System Multiroom 360"
            rating={0}
            ratingHalf={0}
            price={"2,299.00"}
          />
          <ChildProduct
            img={sell3}
            title="Tablet Red EliteBook Revolve 810 G2"
            rating={3}
            ratingHalf={1}
            price={"2,299.00"}
            priceDown={"2,100.00"}
          />
        </div>
      </div>
      <div className="box-featured-products">
        <h5 className="featured-products-title">On-sale Products</h5>
        <div className="box-flex-child-product">
          <ChildProduct
            img={onsale1}
            title="Smartphone 6S 32GB LTE"
            rating={0}
            ratingHalf={0}
            price={"1,215.00"}
            priceDown={"1,100.00"}
          />
          <ChildProduct
            img={onsale2}
            title="Aerocool EN52377 Dead Silence Gaming Cube Case"
            rating={4}
            ratingHalf={0}
            price={"180.00"}
            priceDown={"150.00"}
          />
          <ChildProduct
            img={onsale3}
            title="Apple MacBook Pro MF841HN/A 13-inch Laptop"
            rating={5}
            ratingHalf={0}
            price={"1,800.00"}
            priceDown={"1,500.00"}
          />
        </div>
      </div>
      <div className="box-banner-featured">
        <a href="shop" className="footer-banner-link">
          <img src={banner} alt="" className="banner-featured" />
        </a>
      </div>
    </div>
  );
};
export default CustomFeatureProduct;
