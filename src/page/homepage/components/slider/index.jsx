import Slider from "react-slick";
import slider1 from "../../../../assets/img/silder-header/Smartphones.png";
import slider2 from "../../../../assets/img/silder-header/smartwatches-resized.png";
import slider3 from "../../../../assets/img/silder-header/Sounddevice.png";
import "./style.scss";
const HeaderSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings} className="slider-header">
        <div className="silder-header-box">
          <div className="slider-content">
            <p className="slider-title">shop to get what you love</p>
            <p className="slider-text">
              <span>timepieces that</span> <span>make a statement</span> up to
              <strong> 40% off</strong>
            </p>
            <a href="shop" className="btn-slider">
              Start Buying
            </a>
          </div>
          <img src={slider1} alt="" className="slider-content-img" />
        </div>
        <div className="silder-header-box">
          <div className="slider-content">
            <p className="slider-title2">
              The new <span>standard</span>
            </p>
            <p className="slider-text small-font">
              <span>
                <b>under favorabale smartwatches</b>
              </span>
              <span>From</span>
              <strong>
                <small className="big-font">$</small>
                <span className="money-big-size">749</span>
                <small className="big-font">99</small>
              </strong>
            </p>
            <a href="shop" className="btn-slider">
              Start Buying
            </a>
          </div>
          <img src={slider2} alt="" className="slider-content-img" />
        </div>
        <div className="silder-header-box">
          <div className="slider-content">
            <p className="slider-title">shop to get what you love</p>
            <p className="slider-text">
              <span>timepieces that</span> <span>make a statement</span> up to
              <strong> 40% off</strong>
            </p>
            <a href="shop" className="btn-slider">
              Start Buying
            </a>
          </div>
          <img src={slider3} alt="" className="slider-content-img" />
        </div>
      </Slider>
    </div>
  );
};
export default HeaderSlider;
