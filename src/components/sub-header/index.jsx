import "./style.scss";
const SubHeader = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="sub-header">
          <ul className="menu-sub-items">
            <li className="menu-sub-item">
              <div className="all-dep">
                <p className="all-dep-title">
                  <i className="fa-solid fa-bars"></i>
                  <span>All Departments</span>
                </p>
              </div>
            </li>
            <li className="menu-sub-item">
              <div className="all-pages">
                <a href="" className="all-pages-link">
                  <span>All pages</span>
                  <i className="fa-solid fa-angle-down"></i>
                </a>
              </div>
            </li>
            <li className="menu-sub-item">
              <a href="" className="menu-item-link">
                Trending Styles
              </a>
            </li>
            <li className="menu-sub-item">
              <a href="" className="menu-item-link">
                Trending Styles
              </a>
            </li>
            <li className="menu-sub-item">
              <a href="" className="menu-item-link">
                Gift Cards
              </a>
            </li>
            <li className="menu-sub-item">
              <a href="" className="menu-item-link">
                Free Shipping on Orders $50+
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SubHeader;
