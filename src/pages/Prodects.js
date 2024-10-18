import { json, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Prodects() {
  const [prodects, setprodect] = useState([]);

  useEffect(() => {
    getAllProdect();
  }, []);
  const getAllProdect = () => {
    fetch("http://localhost:5000/prodects")
      .then((res) => res.json())
      .then((data) => setprodect(data));
  };
  const deletProdetWithId = (prodect) => {
    Swal.fire({
      title: `are you sure delete this ${prodect.title}?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        // if click ok you delete prodect
        fetch(`http://localhost:5000/prodects/${prodect.id} `, {
          method: "DELETE",
        })
          .then((Res) => Res.json())
          .then(() => getAllProdect());
      }
      // else {
      //   // else  set fixd protect
      // }
    });
  };

  return (
    <>
      <h1>hello prodect</h1>
      <Link to={`/prodects/add`} className="btn btn-success mt-4">
        Add new prodect
      </Link>
      <hr />

      <table class="table table-striped mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>price</th>
            <th>image</th>
            <th>Operaction</th>
          </tr>
        </thead>
        <tbody>
          {prodects.map((prodect) => {
            return (
              <>
                <tr key={prodect.id}>
                  <td>{prodect.id}</td>
                  <td>{prodect.title}</td>
                  <td>{prodect.price}$</td>
                  <td>
                    {" "}
                    <img
                      style={{ width: "30%" }}
                      src={prodect.image}
                      alt="ghj"
                    />
                  </td>

                  <td>
                    <button
                      onClick={() => {
                        deletProdetWithId(prodect);
                      }}
                      className="btn btn-danger btn-sm  me-2"
                    >
                      <i className="bi bi-trash"></i> Delete
                    </button>
                    <Link
                      to={`/prodects/${prodect.id}`}
                      className="btn btn-info btn-sm  me-2"
                    >
                      <i className="bi bi-eye"></i> view
                    </Link>
                    <Link
                      to={`/prodects/edit/${prodect.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      <i className="bi bi-pencil"></i>Edite
                    </Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Prodects;
