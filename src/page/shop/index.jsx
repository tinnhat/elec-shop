import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Modal, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Route, useSearchParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainHeader from "../../components/main-header";
import { useQuery } from "../../hooks/useQuery";
import Categories from "./categories";
import Product from "./product";
import RecommendedSliderProduct from "./silder-recommend-product";
import SyncLoader from "react-spinners/SyncLoader";
import "./silder-recommend-product/style.scss";
import "./style.scss";
const Shop = () => {
  const [query, setQuery] = useQuery();
  const [allCategories, setAllCategories] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const productPerPage = 20;
  const pageVisited = pageNumber * productPerPage;
  const getAllCategories = async () => {
    const res = await axios.get(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/category"
    );
    setAllCategories(res.data.data);
  };
  const getAllProduct = async () => {
    const res = await axios.get(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/product"
    );
    const newAllProduct = res.data.data.map((product) => {
      return { ...product, quantity: 1, totalPrice: 0 };
    });
    setAllProduct(newAllProduct);
  };
  useEffect(() => {
    getAllCategories();
    getAllProduct();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  // pagination
  const pageCount = Math.ceil(allProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProducts = allProduct
    .slice(pageVisited, pageVisited + productPerPage)
    .map((product, idx) => {
      return (
        <li className="product-item" key={idx}>
          <Product product={product} key={idx} />
        </li>
      );
    });

  return (
    <div className="wrapper">
      <MainHeader />
      <div className="container">
        <div className="shop">
          <div className="url-title">
            <a href="/" className="url-home">
              Home
            </a>
            <i className="fa-solid fa-chevron-right icon-right"></i>
            <span className="url-page-current">Shop</span>
          </div>
          {loading ? (
            <Modal
              className="modal-loading"
              centered
              visible={loading}
              footer={false}
            >
              <SyncLoader color={"#36D7B7"} loading={loading} size={20} />
            </Modal>
          ) : (
            <div className="shop-layout">
              <div className="nav-filter">
                <ul className="nav-filter-list">
                  <p className="nav-filter-title">Browser Categories</p>

                  {allCategories.map((cate, idx) => {
                    return <Categories cate={cate} key={idx} />;
                  })}
                </ul>
              </div>
              <div className="box-layout-product">
                <div className="recommend-slider-product">
                  <h2 className="recommend-slider-product-title">
                    Recommended Products
                  </h2>
                  <RecommendedSliderProduct />
                </div>
                <div className="shop-product-list">
                  <h4 className="product-list-title">Shop</h4>
                  <div className="show-all-product">
                    <ul className="box-show-allproduct">{displayProducts}</ul>
                  </div>
                </div>
                <ReactPaginate
                  previousLabel={<LeftOutlined />}
                  nextLabel={<RightOutlined />}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default Shop;
