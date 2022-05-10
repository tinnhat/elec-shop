import "./Addresses.scss";

const Addresses = () => {
  return (
    <div className="addresses">
      <h2 className="big-heading">Addresses</h2>
      <p>
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="group-add-address">
        <div className="item">
          <div className="group">
            <h3>Billing address</h3>
            <button>Add</button>
          </div>
          <p>You have not set up this type of address yet.</p>
        </div>
        <div className="item">
          <div className="group">
            <h3>Shipping address</h3>
            <button>Add</button>
          </div>
          <p>You have not set up this type of address yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
