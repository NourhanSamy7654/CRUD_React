import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addprodect() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState();
  const [error, setError] = useState(""); // To store error messages
  const [imageUrl, setImageUrl] = useState(""); // حقل لرابط الصورة
  // const [image, setimage] = useState([]);
  let navgiat = useNavigate();
  const formSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/prodects", {
        // Ensure id and price are sent as numbers
        title,
        description,

        price: Number(price),
        image: imageUrl,
      })

      .then((data) => {
        console.log(data);
        navgiat("/prodects");
      });
    // Validate the form fields
    // if (!id || !title || !description || !price) {
    //   setError("All fields are required.");
    //   return;
    // }

    // setError(""); // Clear the error if the form is valid

    // fetch("http://localhost:5000/prodects", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     id: Number(id), // Ensure id and price are sent as numbers
    //     title,
    //     description,
    //     price: Number(price),
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
          <label htmlFor="prodectTitle" className="form-label">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product title"
            type="text"
            className="form-control"
            id="prodectTitle"
            aria-describedby="product title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prodectdescription" className="form-label">
            Description
          </label>
          <input
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Product description"
            type="text"
            className="form-control"
            id="prodectdescription"
            aria-describedby="product description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prodectPrice" className="form-label">
            Price
          </label>
          <input
            value={price}
            onChange={(e) => setprice(Number(e.target.value))} // Ensure it's a number
            placeholder="Product price"
            type="number"
            className="form-control"
            id="prodectPrice"
            aria-describedby="product price"
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

export default Addprodect;
