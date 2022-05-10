import pic1 from "../../assets/img/child-banner/1.png";
import pic2 from "../../assets/img/child-banner/2.png";
import pic3 from "../../assets/img/child-banner/3.png";
import pic4 from "../../assets/img/child-banner/4.png";
import SubHeader from "../../components/sub-header";
import ChildProductBanner from "./components/box-banner-product";
import MenuCategory from "./components/categories";
import HeaderSlider from "./components/slider";
import "./style.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <SubHeader />
      <div className="wrapper bkg-gray">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <MenuCategory />
            </div>
            <div className="col-7">
              <HeaderSlider />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="chill-banner-product-box">
          <ChildProductBanner
            img={pic1}
            text1="catch big"
            text2="deal"
            text3="on the cameras"
          />
          <ChildProductBanner
            img={pic2}
            text1="Tablets,smartphones"
            text2="and more"
            text3="up to 70%"
          />
          <ChildProductBanner
            img={pic3}
            text1="shop the"
            text2="hottest"
            text3="products"
          />
          <ChildProductBanner
            img={pic4}
            text1="shop the"
            text2="hottest"
            text3="products"
          />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
