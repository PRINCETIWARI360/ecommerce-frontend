import { useState } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ecommerce-backend-qmf9.onrender.com/api/contact", {
        name,
        email,
        message,
      })
      .then((res) => {
        alert(res.data);
      });
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          className="form-control mb-3"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="form-control mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Enter Message"
          className="form-control mb-3"
          rows="4"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
