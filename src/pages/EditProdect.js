import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [image, setimageurl] = useState();
  const [error, setError] = useState(null);
  let navgiat = useNavigate();
  let { id } = useParams(); // Get the product ID from the URL params

  // Fetch the product data when the component loads
  useEffect(() => {
    axios
      .get(`http://localhost:5000/prodects/${id}`)
      .then((res) => {
        const product = res.data;
        setTitle(product.title);
        setDescription(product.description);
        setPrice(product.price);
        // Assuming image is a URL or file path
        if (product.image) {
          setimageurl(product.image); // Set the image URL if it exists
        }
      })
      .catch((error) => setError("Error fetching product data."));
  }, [id]);

  // Handle form submission to update the product
  const formSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:5000/prodects/${id}`, {
        title,

        description,
        price: Number(price), // تأكد أن السعر رقم
        image,
      })
      .then((data) => {
        console.log("Product updated successfully:", data);
        navgiat("/prodects");
      })
      .catch((error) => {
        console.error(
          "Error updating product:",
          error.response?.data || error.message
        );
      });
  };

  return (
    <>
      <h1>Update Product</h1>
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
          <label htmlFor="prodectDescription" className="form-label">
            Description
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Product description"
            type="text"
            className="form-control"
            id="prodectDescription"
            aria-describedby="product description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prodectPrice" className="form-label">
            Price
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))} // Ensure it's a number
            placeholder="Product price"
            type="number"
            className="form-control"
            id="prodectPrice"
            aria-describedby="product price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userImage" className="form-label">
            Image URL
          </label>
          <input
            value={image}
            onChange={(e) => setimageurl(e.target.value)} // Ensure it's a valid URL
            placeholder="prodect image URL"
            type="text"
            className="form-control"
            id="prodectImage"
            aria-describedby="prodect image"
          />
        </div>
        {/* Optionally, show a preview of the image if a valid URL exists */}
        {image && (
          <div className="mb-3">
            <label className="form-label">Image Preview</label>
            <img
              src={image}
              alt="prodect"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
    </>
  );
}

export default EditProduct;
