import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/auth/login", {
        email,
        password,
      })
      .then((res) => {
        alert(res.data);

        // login token save
        localStorage.setItem("token", "userLoggedIn");

        // redirect to profile page
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="mb-4 text-center">Login</h2>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="form-control mb-3"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
