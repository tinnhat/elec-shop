import "./style.scss";
const MenuCategory = () => {
  return (
    <nav className="menu-category-top">
      <ul className="categories-items">
        <li className="categories-item">
          <a href="shop" className="categories-item-link ">
            <b>Value of the Day</b>
          </a>
        </li>
        <li className="categories-item">
          <a href="shop" className="categories-item-link">
            <b>Top 100 Offers</b>
          </a>
        </li>
        <li className="categories-item">
          <a href="shop" className="categories-item-link">
            <b>New Arrivals</b>
          </a>
        </li>
        <li className="categories-item">
          <a href="shop" className="categories-item-link">
            Computer & Accessories
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </li>
        <li className="categories-item">
          <a href="shop" className="categories-item-link">
            Cameras, Audio & Video
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </li>
        <li className="categories-item">
          <a href="shop" className="categories-item-link">
            Mobiles & Tablets
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </li>
        <li className="categories-item">
          <a href="shop" className="categories-item-link">
            Movies, Music & Video Games
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </li>
        <li className="categories-item">
          <a href="shop" className="categories-item-link">
            TV & Audio
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </li>
        <li className="categories-item">
          <a href="shop" className="categories-item-link">
            Watches & Eyewear
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </li>
        <li className="categories-item">
          <a href="shop" className="categories-item-link">
            Car, Motorbike & Industrial
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </li>
        <li className="categories-item">
          <a href="shop" className="categories-item-link">
            Accessories
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default MenuCategory;
