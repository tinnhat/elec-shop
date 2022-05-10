import "./Payment.scss";

const Payment = () => {
  return (
    <div className="payments">
      <h2 className="big-heading">Payments</h2>
      <div className="group-text">
        <p>No order has been made yet.</p>
      </div>
      <button>Add payment method</button>
    </div>
  );
};

export default Payment;
