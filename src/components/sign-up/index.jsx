import "./style.scss";
const SignUp = () => {
  return (
    <section className="sign-up">
      <div className="container">
        <div className="sign-up-box">
          <div className="signup-content">
            <h4 className="sigup-title">
              <i className="fa-solid fa-paper-plane icon-send-sigup"></i>
              Sign up to Newsletter
            </h4>
            <p className="signup-text">
              ...and receive
              <span> $20 coupon for first shopping</span>
            </p>
          </div>
          <div className="signup-input-box">
            <form action="" className="form-sigup">
              <input
                type="mail"
                className="signup-input"
                placeholder="Enter your email address"
              />
              <button className="btn-sign-up-submit">SignUp</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
