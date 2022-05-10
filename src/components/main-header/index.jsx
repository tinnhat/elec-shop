import style from "./style.module.scss";
const MainHeader = () => {
  return (
    <div className="wrapper">
      <header className={style.mainHeader}>
        <div className="container">
          <ul className={style.menuHeader}>
            <li className={style.menuItem}>
              <a href="" className={style.menuItemLink}>
                Home{" "}
                <i className={`fa-solid fa-angle-down ${style.iconDown}`}></i>
              </a>
            </li>
            <li className={style.menuItem}>
              <a href="" className={style.menuItemLink}>
                TV & Audio{" "}
                <i className={`fa-solid fa-angle-down ${style.iconDown}`}></i>
              </a>
            </li>
            <li className={style.menuItem}>
              <a href="" className={style.menuItemLink}>
                Smart Phones{" "}
                <i className={`fa-solid fa-angle-down ${style.iconDown}`}></i>
              </a>
            </li>
            <li className={style.menuItem}>
              <a href="" className={style.menuItemLink}>
                Laptops & Desktops{" "}
                <i className={`fa-solid fa-angle-down ${style.iconDown}`}></i>
              </a>
            </li>
            <li className={style.menuItem}>
              <a href="" className={style.menuItemLink}>
                Gadgets{" "}
                <i className={`fa-solid fa-angle-down ${style.iconDown}`}></i>
              </a>
            </li>
            <li className={style.menuItem}>
              <a href="" className={style.menuItemLink}>
                GPS & Car{" "}
                <i className={`fa-solid fa-angle-down ${style.iconDown}`}></i>
              </a>
            </li>
            <li className={style.menuItem}>
              <a href="" className={style.menuItemLink}>
                Cameras & Accessories{" "}
                <i className={`fa-solid fa-angle-down ${style.iconDown}`}></i>
              </a>
            </li>
            <li className={style.menuItem}>
              <a href="" className={style.menuItemLink}>
                Movie & Games{" "}
                <i className={`fa-solid fa-angle-down ${style.iconDown}`}></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
export default MainHeader;
