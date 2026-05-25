import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container mt-4">
      <div className="bg-light p-5 text-center mb-5 rounded">
        <h1>Welcome to E-Shop</h1>

        <p>Best Electronics Products at Affordable Price</p>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            placeholder="Search product..."
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <h2 className="text-center mb-4">Our Products</h2>

      <div className="row">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
