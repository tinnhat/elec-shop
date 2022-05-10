import "./style.scss";
const ChildProductBanner = ({ img, text1, text2, text3 }) => {
  return (
    <a href="shop" className="chill-banner-product">
      <img src={img} alt="" className="chill-banner-product-img" />
      <div className="chill-banner-product-content">
        <p className="chill-banner-product-text">
          {text1}
          <span>
            <b>{text2}</b>
          </span>
          {text3}
        </p>
        <a href="shop" className="chill-banner-product-link">
          Shop now <i className="fa-solid fa-angle-right icon-showp-now"></i>
        </a>
      </div>
    </a>
  );
};
export default ChildProductBanner;
