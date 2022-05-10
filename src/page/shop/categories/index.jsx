import { useState } from "react";

const Categories = ({ cate }) => {
  const [showSub, setShowSub] = useState(false);
  const hanldeShowSubMenu = (e) => {
    e.preventDefault();
    setShowSub(true);
  };
  return (
    <li className="nav-menu-item" key={cate._id}>
      {cate.sub_categories.length === 0 ? (
        <a href="" className="nav-menu-item-link">
          {cate.name}
          <span>({cate.total})</span>
        </a>
      ) : (
        <a href="" className="nav-menu-item-link" onClick={hanldeShowSubMenu}>
          <i className="fa-solid fa-angle-right icon-right-sub-menu"></i>
          {cate.name}
          <span>({cate.total})</span>
        </a>
      )}

      {showSub && (
        <div className="sub-nav-menu">
          <ul className="menu-sub-nav-filter">
            {cate.sub_categories.map((sub, idx) => {
              return (
                <li className="menu-sub-nav-item" key={idx}>
                  <a href="" className="sub-nav-item-link">
                    {sub.sub_name} <span>({sub.total})</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};
export default Categories;
