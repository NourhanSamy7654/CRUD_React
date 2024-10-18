import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [Age, setAge] = useState();
  const [password, setpassword] = useState("");
  const [image, setimageurl] = useState("");
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  let { id } = useParams(); // Get the user ID from the URL params

  // Fetch the user data when the component loads
  useEffect(() => {
    axios
      .get(`http://localhost:5000/User/${id}`)
      .then((res) => {
        const user = res.data;
        setname(user.name);
        setemail(user.email);
        setAge(user.Age);
        setpassword(user.password);
        if (user.image) {
          setimageurl(user.image); // Set the image URL if it exists
        }
      })
      .catch((error) => setError("Error fetching user data."));
  }, [id]);

  // Handle form submission to update the user
  const formSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:5000/User/${id}`, {
        name,
        email,
        Age,
        password,
        image, // Include the image URL if provided
      })
      .then((data) => {
        console.log("User updated successfully:", data);
        navigate("/User");
      })
      .catch((error) => {
        console.error(
          "Error updating user:",
          error.response?.data || error.message
        );
      });
  };

  return (
    <>
      <h1>Update User</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="User name"
            type="text"
            className="form-control"
            id="userName"
            aria-describedby="user name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="User email"
            type="text"
            className="form-control"
            id="userEmail"
            aria-describedby="user email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userAge" className="form-label">
            Age
          </label>
          <input
            value={Age}
            onChange={(e) => setAge(Number(e.target.value))} // Ensure it's a number
            placeholder="User Age"
            type="number"
            className="form-control"
            id="userAge"
            aria-describedby="user Age"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userPassword" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="User password"
            type="password"
            className="form-control"
            id="userPassword"
            aria-describedby="user password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userImage" className="form-label">
            Image URL
          </label>
          <input
            value={image}
            onChange={(e) => setimageurl(e.target.value)} // Ensure it's a valid URL
            placeholder="User image URL"
            type="text"
            className="form-control"
            id="userImage"
            aria-describedby="user image"
          />
        </div>
        {/* Optionally, show a preview of the image if a valid URL exists */}
        {image && (
          <div className="mb-3">
            <label className="form-label">Image Preview</label>
            <img
              src={image}
              alt="User"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Update User
        </button>
      </form>
    </>
  );
}

export default EditUser;
