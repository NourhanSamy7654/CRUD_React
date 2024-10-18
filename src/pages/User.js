import { json, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function User() {
  const [User, setuser] = useState([]);
  useEffect(() => {
    getAlluser();
  }, []);
  const getAlluser = () => {
    fetch("http://localhost:5000/User")
      .then((res) => res.json())
      .then((data) => setuser(data));
  };
  const deletProdetWithId = (user) => {
    Swal.fire({
      title: `are you sure delete this ${user.name}?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        // if click ok you delete user
        fetch(`http://localhost:5000/User/${user.id} `, {
          method: "DELETE",
        })
          .then((Res) => Res.json())
          .then(() => getAlluser());
      }
      // else {
      //   // else  set fixd protect
      // }
    });
  };

  return (
    <>
      <h1> user</h1>
      <Link to={`/User/add`} className="btn btn-success mt-4">
        Add new user
      </Link>
      <table class="table table-striped mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>email</th>
            <th>Age</th>
            <th>photo</th>

            <th>Operaction</th>
          </tr>
        </thead>
        <tbody>
          {User.map((user) => {
            return (
              <>
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.Age}</td>
                  <td>
                    {" "}
                    <img style={{ width: "30%" }} src={user.image} alt="ghj" />
                  </td>

                  <td>
                    <button
                      onClick={() => {
                        deletProdetWithId(user);
                      }}
                      className="btn btn-danger btn-sm  me-2"
                    >
                      <i className="bi bi-trash"></i> Delete
                    </button>
                    <Link
                      to={`/User/${user.id}`}
                      className="btn btn-info btn-sm  me-2"
                    >
                      <i className="bi bi-eye"></i> view
                    </Link>
                    <Link
                      to={`/User/edit/${user.id}`}
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
export default User;
