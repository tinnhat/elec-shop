import styles from "./style.module.scss";
import "./style.scss";
import { useSelector } from "react-redux";
const Topbar = () => {
  const user = useSelector((state) => state.userReducer.currentUser);
  return (
    <div className="topbar-wrapper">
      <div className="container">
        <div className={styles.topbar}>
          <p className={styles.title}>Welcome to Worldwide Electronics Store</p>
          <div className={styles.boxIcon}>
            <a className={styles.text}>
              <i className={`fa-solid fa-location-dot ${styles.icon}`} />
              Store Locator
            </a>
            <a className={styles.text}>
              <i className={`fa-solid fa-truck-fast ${styles.icon}`}></i>
              Track Your Order
            </a>
            <a href="/shop" className={styles.text}>
              <i className={`fa-solid fa-bag-shopping ${styles.icon}`}></i>
              Shop
            </a>
            <a href="/my-account" className={styles.text}>
              <i className={`fa-solid fa-user ${styles.icon}`}></i>
              {user?.username || user?.user?.username || "My account"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
