import logo from "../../assets/logo.png";
import "./style.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="box-footer">
          <div className="footer-logo-box">
            <img src={logo} alt="" className="logo-footer" />
            <div className="box-headphone">
              <div className="box-headphone-icon">
                <i className="fa-solid fa-headphones headphone-icon"></i>
              </div>
              <div className="box-right-headphone">
                <p className="small-text-headphone">
                  Got Questions ? Call us 24/7!
                </p>
                <p className="text-headphone">
                  (800) 8001-8588, (0600) 874 548
                </p>
              </div>
            </div>
            <p className="footer-logo-title">Contact Info</p>
            <p className="footer-logo-text">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
            <div className="box-social-footer">
              <a href="" className="social-link-footer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="" className="social-link-footer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="" className="social-link-footer">
                <i className="fa-brands fa-pinterest"></i>
              </a>
              <a href="" className="social-link-footer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="" className="social-link-footer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="" className="social-link-footer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="footer-box-find">
            <p className="box-find-title">Find It Fast</p>
            <div className="box-flex-find-footer">
              <div className="box-left-find-footer">
                <a href="" className="find-link">
                  Laptops & Computers
                </a>
                <a href="" className="find-link">
                  Cameras & Photography
                </a>
                <a href="" className="find-link">
                  Smart Phones & Tablets
                </a>
                <a href="" className="find-link">
                  Video Games & Consoles
                </a>
                <a href="" className="find-link">
                  TV & Audio
                </a>
                <a href="" className="find-link">
                  Gadgets
                </a>
                <a href="" className="find-link">
                  Waterproof Headphones
                </a>
              </div>
              <div className="box-right-find-footer">
                <a href="" className="find-link">
                  About
                </a>
                <a href="" className="find-link">
                  Contact
                </a>
                <a href="" className="find-link">
                  Wishlist
                </a>
                <a href="" className="find-link">
                  Compare
                </a>
                <a href="" className="find-link">
                  FAQ
                </a>
                <a href="" className="find-link">
                  Store Directory
                </a>
              </div>
            </div>
          </div>
          <div className="footer-box-customer">
            <p className="box-find-title">Customer Care</p>
            <div className="box-flex-customer">
              <a href="" className="find-link">
                My Account
              </a>
              <a href="" className="find-link">
                Track your Order
              </a>
              <a href="" className="find-link">
                Customer Service
              </a>
              <a href="" className="find-link">
                Returns/Exchange
              </a>
              <a href="" className="find-link">
                FAQ
              </a>
              <a href="" className="find-link">
                Product Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
