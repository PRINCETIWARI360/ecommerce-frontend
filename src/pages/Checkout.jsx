import {useContext} from "react";
import {CartContext} from "../context/CartContext";
import axios from "axios";

function Checkout() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    axios
      .post("https://ecommerce-backend-qmf9.onrender.com/api/orders", { cart })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Checkout Page</h2>

      <h4>Total Amount: ₹ {total}</h4>

      <button className="btn btn-success mt-3" onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
