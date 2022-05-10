import Slider from "react-slick";
import logo1 from "../../assets/img/logo-slider/logo1.png";
import logo2 from "../../assets/img/logo-slider/logo2.png";
import logo3 from "../../assets/img/logo-slider/logo3.png";
import logo4 from "../../assets/img/logo-slider/logo4.png";
import logo5 from "../../assets/img/logo-slider/logo5.png";
import logo6 from "../../assets/img/logo-slider/logo6.png";
import "./style.scss";
const LogoSlider = () => {
  const settings = {
    dots: false,
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
  return (
    <div className="logo-slider">
      <Slider {...settings}>
        <div style={{ marginRight: "10px" }}>
          <a href="">
            <img src={logo1} alt="" />
          </a>
        </div>
        <div style={{ marginRight: "10px" }}>
          <a href="">
            <img src={logo2} alt="" />
          </a>
        </div>
        <div style={{ marginRight: "10px" }}>
          <a href="">
            <img src={logo3} alt="" />
          </a>
        </div>
        <div style={{ marginRight: "10px" }}>
          <a href="">
            <img src={logo4} alt="" />
          </a>
        </div>
        <div style={{ marginRight: "10px" }}>
          <a href="">
            <img src={logo5} alt="" />
          </a>
        </div>
        <div>
          <a href="">
            <img src={logo6} alt="" />
          </a>
        </div>
      </Slider>
    </div>
  );
};
export default LogoSlider;
