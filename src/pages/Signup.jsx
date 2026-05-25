import {useState} from "react";
import axios from "axios";

function Signup() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          name,
          email,
          password
        }
      );
      alert(res.data);
    } catch(err) {
      console.log(err);
    }
  };
  return (

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="mb-4">Signup</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control mb-3"
              onChange={(e)=>setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control mb-3"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control mb-3"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button className="btn btn-success w-100">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;