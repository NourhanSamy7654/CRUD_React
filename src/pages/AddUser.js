import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [Age, setAge] = useState(0);
  const [password, setpassword] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // حقل لرابط الصورة
  const [error, setError] = useState(""); // To store error messages
  // const [image, setimage] = useState([]);
  let navgiat = useNavigate();
  const formSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/User", {
        // Ensure id and Age are sent as numbers
        name,
        email,
        Age,
        image: imageUrl,
        password,
      })

      .then((data) => {
        console.log(data);
        navgiat("/User");
      });
    // Validate the form fields
    // if (!id || !name || !email || !Age) {
    //   setError("All fields are required.");
    //   return;
    // }

    // setError(""); // Clear the error if the form is valid

    // fetch("http://localhost:5000/User", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     id: Number(id), // Ensure id and Age are sent as numbers
    //     name,
    //     email,
    //     Age: Number(Age),
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.error("Error:", err));
  };

  return (
    <>
      <h1>Add Product</h1>
      {/* {error && <div className="alert alert-danger">{error}</div>} */}
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="prodectname" className="form-label">
            name
          </label>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="user name"
            type="text"
            className="form-control"
            id="username"
            aria-describedby="user name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prodectemail" className="form-label">
            email
          </label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="user email"
            type="email"
            className="form-control"
            id="useremail"
            aria-describedby="user email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prodectAge" className="form-label">
            Age
          </label>
          <input
            value={Age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="user Age"
            type="number"
            className="form-control"
            id="userAge"
            aria-describedby="user Age"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prodectAge" className="form-label">
            password
          </label>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)} // Ensure it's a number
            placeholder="user password"
            type="Password"
            className="form-control"
            id="userpassword"
            aria-describedby="user password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prodectImageUrl" className="form-label">
            Image URL
          </label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)} // قبول رابط URL للصورة
            placeholder="Product image URL"
            type="text"
            className="form-control"
            id="prodectImageUrl"
            aria-describedby="product image"
          />
        </div>

        {/* Display the image if the URL is provided */}
        {imageUrl && (
          <div className="mb-3">
            <img
              src={imageUrl}
              alt="Product"
              style={{ width: "200px", height: "auto" }}
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}
export default AddUser;
