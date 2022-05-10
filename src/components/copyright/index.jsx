import "./style.scss";
import bank1 from "../../assets/img/footer-bank/bank1.png";
const CopyRight = () => {
  return (
    <div className="copy-right">
      <div className="container">
        <div className="copy-right-box">
          <p className="copy-right-name">
            © <b>Electro</b> - All Rights Reserved
          </p>
          <img src={bank1} alt="" className="img-bank" />
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
