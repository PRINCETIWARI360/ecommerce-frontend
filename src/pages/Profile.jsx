import { useState } from "react";

function Profile() {
  const [name, setName] = useState("Prince Tiwari");
  const [email, setEmail] = useState("prince@gmail.com");
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">My Profile</h2>

      <div className="card p-4" style={{ maxWidth: "500px" }}>
        <div className="text-center mb-3">
          <img
            src={
              image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            width="120"
            height="120"
            style={{ borderRadius: "50%" }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="file"
            className="form-control mb-3"
            onChange={handleImage}
          />

          <input
            type="text"
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />

          <input
            type="email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <button className="btn btn-primary w-100">Update Profile</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
