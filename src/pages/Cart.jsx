import {useContext} from "react";
import {CartContext} from "../context/CartContext";
import {Link} from "react-router-dom";

function Cart() {
  const {cart, removeFromCart, increaseQty, decreaseQty} =
    useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>

      {cart.length===0?(
        <h4>Cart is empty</h4>
      ):(
        cart.map((item) => (
          <div className="card mb-3" key={item.id}>
            <div className="row g-0">
              <div className="col-md-3">
                <img
                  src={`https://ecommerce-backend-qmf9.onrender.com/images/${item.image}`}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5>{item.name}</h5>
                  <p>Price: ₹ {item.price}</p>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-secondary"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>
                    <span className="mx-3">{item.quantity}</span>
                    <button
                      className="btn btn-secondary"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-center">
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="mt-4">
          <h3>Total Price: ₹ {total}</h3>

          <Link to="/checkout" className="btn btn-success mt-3">
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
