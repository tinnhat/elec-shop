import { Tabs } from "antd";
import img1 from "../../assets/img/featured1.png";
import img2 from "../../assets/img/featured2.png";
import img3 from "../../assets/img/featured3.png";

import "./style.scss";
const { TabPane } = Tabs;
const ProductDetailExample = () => {
  return (
    <div className="sub-info-product">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Accessories" key="1">
          <div className="box-accessories-product">
            <div className="box-accessories-left">
              <div className="small-product-accessories">
                <ul className="list-small-product">
                  <li className="item-small-product">
                    <p className="item-product-cate">Smartphones</p>
                    <p className="item-product-name">Smartphone 6S 128GB LTE</p>
                    <img className="item-product-img" src={img1} alt="" />
                    <p className="item-product-price">$780.00</p>
                    <p className="item-product-promotion">$750.00</p>
                  </li>
                  <li className="item-small-product">
                    <p className="item-product-cate">Accessories</p>
                    <p className="item-product-name">
                      Protection Plan for MacBook
                    </p>
                    <img className="item-product-img" src={img2} alt="" />
                    <p className="item-product-price">$780.00</p>
                    <p className="item-product-promotion">$250.00</p>
                  </li>
                  <li className="item-small-product">
                    <p className="item-product-cate">Mac Computers</p>
                    <p className="item-product-name">Apple MacBook Pro</p>
                    <img className="item-product-img" src={img3} alt="" />
                    <p className="item-product-price">$1,800.00</p>
                    <p className="item-product-promotion">$1,500.00</p>
                  </li>
                </ul>
              </div>
              <p className="small-product-text text-gray">
                <i className="fa-solid fa-square-check"></i> This product:
                Smartphone 6S 128GB LTE -{" "}
                <span className="color-small-product-text ">$750.00</span>
              </p>
              <p className="small-product-text">
                <i className="fa-solid fa-square-check"></i> Protection Plan for
                MacBook Air / 13 inch MacBook Pro -{" "}
                <span className="color-small-product-text">$250.00</span>
              </p>
              <p className="small-product-text">
                <i className="fa-solid fa-square-check"></i> Apple MacBook Pro
                MF841HN/A 13-inch Laptop -{" "}
                <span className="color-small-product-text">$1,500.00</span>
              </p>
            </div>
            <div className="box-accessories-right">
              <p className="accessories-product-price">$2,500.00</p>
              <p className="accessories-text-small">for 3 item(s)</p>
              <button className="btn-add-all">Add all to cart</button>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Description" key="2">
          <div className="box-description">
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/overview_hero_title_2x-1024x346.png"
              alt=""
              className="descrb-top-img"
            />
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/overview_hero_2x-e1459776153284-1024x430.jpg"
              alt=""
              className="descrb-bottom-img"
            />
          </div>
        </TabPane>
        <TabPane tab="Specification" key="3">
          <div className="box-spec">
            <p className="spec-title">Technical Specifications</p>
            <div className="line-text-spec">
              <p className="text-left">Brand</p>
              <p className="text-right">Apple</p>
            </div>
            <div className="line-text-spec">
              <p className="text-left">Item Height</p>
              <p className="text-right">18 Millimeters</p>
            </div>
            <div className="line-text-spec">
              <p className="text-left">Item Width</p>
              <p className="text-right">31.4 Centimeters</p>
            </div>
            <div className="line-text-spec">
              <p className="text-left">Screen Size</p>
              <p className="text-right">13 Inches</p>
            </div>
            <div className="line-text-spec">
              <p className="text-left">Item Weight</p>
              <p className="text-right">1.6 Kg</p>
            </div>
            <div className="line-text-spec">
              <p className="text-left">Product Dimensions</p>
              <p className="text-right">21.9 x 31.4 x 1.8 cm</p>
            </div>
            <div className="line-text-spec">
              <p className="text-left">Item model number</p>
              <p className="text-right">MF841HN/A</p>
            </div>
            <div className="line-text-spec">
              <p className="text-left">Processor Brand</p>
              <p className="text-right">Intel</p>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Reviews" key="4">
          <div className="group-text">
            <p>There are no reviews yet</p>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};
export default ProductDetailExample;
