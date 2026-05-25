import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function ProductCard({item}) {
  const {addToCart} = useContext(CartContext);

  return (
    <div className="col-md-3 mb-4">
      <div className="card shadow-sm h-100">
        <img
          src={item.image}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body text-center">
          <h5>{item.name}</h5>

          <p className="text-success fw-bold">₹ {item.price}</p>

          <button
            className="btn btn-primary w-100"
            onClick={()=>addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
