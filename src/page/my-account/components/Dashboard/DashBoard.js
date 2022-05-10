import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../action/userActions";

const DashBoard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.currentUser);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="dashboard">
      <h2 className="big-heading">My Account</h2>
      <p className="hello-user">
        Hello <b>{user?.user?.username}</b> (not <b>{user?.user?.username}</b>?{" "}
        <button onClick={handleLogout}>log out</button>)
      </p>

      <p>
        From your account dashboard you can view your recent orders, manage your
        shipping and billing addresses, and edit your password and account
        details.
      </p>
    </div>
  );
};

export default DashBoard;
