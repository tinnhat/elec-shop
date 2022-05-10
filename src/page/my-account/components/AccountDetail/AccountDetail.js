import "./AccountDetail.scss";

const AccountDetail = () => {
  return (
    <div className="account-detail">
      <h2 className="big-heading">Account details</h2>
      <div className="group-info">
        <label htmlFor="name">Display name *</label>
        <input type="text" name="" id="name" placeholder="nam" />
      </div>
      <div className="group-info">
        <label htmlFor="email">Email address *</label>
        <input type="text" name="" id="email" placeholder="a4@gmail.com" />
      </div>
    </div>
  );
};

export default AccountDetail;
