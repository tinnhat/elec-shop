import { Alert } from "antd";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../action/userActions";
import "./style.scss";
const Login = ({ showModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.errorReducer.error);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    const { email, password } = values;
    if (email && password) {
      showModal(true);
      dispatch(login({ email, password }, navigate));
    }
    showModal(false);
  };
  return (
    <>
      <div className="login-section">
        <p className="login-title">Login</p>
        <p className="text-login">Welcome back! Sign in to your account.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="labelLogin" htmlFor="login-username">
            Username or email address *
          </label>

          <input
            type="text"
            {...register("email", { required: true })}
            id="login-username"
            className="login-box"
          />
          {errors.email && errors.email.type === "required" && (
            <span role="alert" className="arlet-login">
              This is required
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
          <div className="rememberbox">
            <input
              type="checkbox"
              {...register("Remember me", {})}
              id="login-check"
            />
            <label className="labelRemember" htmlFor="login-check">
              Remember me
            </label>
          </div>

          <button type="submit" className="submit">
            Login
          </button>
        </form>
        <a href="/" className="lost-pass">
          Lost your password ?
        </a>
        {error && (
          <Alert
            style={{ marginTop: "20px" }}
            message="Error"
            description={error}
            type="error"
            showIcon
          />
        )}
      </div>
    </>
  );
};
export default Login;
