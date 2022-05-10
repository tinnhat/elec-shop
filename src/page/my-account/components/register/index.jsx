import "../login/style.scss";
import "./style.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAcc } from "../../../../action/userActions";
import { Alert } from "antd";
const Register = ({ showModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.errorReducer.errorRegister);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    showModal(true);
    dispatch(registerAcc(values, navigate));
  };

  return (
    <div className="login-section">
      <p className="login-title">Register</p>
      <p className="text-login">
        Create new account today to reap the benefits of a personalized shopping
        experience..
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="labelLogin" htmlFor="login-username">
          Username *
        </label>

        <input
          type="text"
          {...register("username", { required: true })}
          id="login-username"
          className="login-box"
        />
        {errors.username && errors.username.type === "required" && (
          <span role="alert" className="arlet-login">
            This is required
          </span>
        )}
        <label className="labelLogin" htmlFor="login-email">
          Email address *
        </label>

        <input
          type="text"
          id="login-email"
          className="login-box"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && errors.email.type === "required" && (
          <span role="alert" className="arlet-login">
            This is required
          </span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span role="alert" className="arlet-login">
            Wrong email type,please try agian !
          </span>
        )}
        <label className="labelLogin" htmlFor="login-pass">
          Password *
        </label>

        <input
          type="password"
          {...register("password", { required: true })}
          id="login-pass"
          className="login-box"
        />
        {errors.password && errors.password.type === "required" && (
          <span role="alert" className="arlet-login">
            This is required
          </span>
        )}
        <p className="text-login">
          Your personal data will be used to support your experience throughout
          this website, to
          <span>
            manage access to your account, and for other purposes described in
            our privacy policy.
          </span>
        </p>

        <button type="submit" className="submit">
          Register
        </button>
      </form>
      {error && (
        <Alert
          style={{ marginTop: "20px" }}
          message="Error"
          description={error}
          type="error"
          showIcon
        />
      )}

      <div className="box-info-register">
        <p className="info-register-title">
          Sign up today and you will be able to :
        </p>
        <p className="register-check-title">
          <i className="fa-solid fa-check icon-check"></i>Speed your way through
          checkout
        </p>
        <p className="register-check-title">
          <i className="fa-solid fa-check icon-check"></i>Track your orders
          easily
        </p>
        <p className="register-check-title">
          <i className="fa-solid fa-check icon-check"></i>Keep a record of all
          your purchases
        </p>
      </div>
    </div>
  );
};
export default Register;
