import MainHeader from "../../components/main-header";
import "./style.scss";
const ErrorPage = () => {
  return (
    <section className="error-page">
      <MainHeader />
      <div className="container">
        <div className="url-title">
          <a href="/" className="url-home">
            Home
          </a>
          <i className="fa-solid fa-chevron-right icon-right"></i>
          <span className="url-page-current">Error 404</span>
        </div>
        <div className="error-box">
          <p className="error-title">404!</p>
          <p className="error-text">
            Nothing was found at this location. Try searching, or check out the
            links below.
          </p>
          <a href="/" className="btn-home">
            Go home
          </a>
        </div>
      </div>
    </section>
  );
};
export default ErrorPage;
