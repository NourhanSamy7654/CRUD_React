import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const [User, setprodect] = useState([]);
  const { Userid } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/User/${Userid}`)
      .then((res) => res.json())
      .then((data) => setprodect(data));
  }, []);
  return (
    <>
      {User && (
        <>
          {" "}
          {/* <img style={{ width: "30%" }} src={User.image} alt="ghj" /> */}
          <img style={{ width: "30%" }} src={User.image} alt="ghj" />
          <h1> name :{User.name}</h1>
          <h2>id:{User.id}</h2>
          <p> email:{User.email}</p>
        </>
      )}
    </>
  );
}
export default UserDetails;
