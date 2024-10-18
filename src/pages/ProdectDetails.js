import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProdectDetails() {
  const [prodects, setprodect] = useState([]);
  const { prodectsid } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/prodects/${prodectsid}`)
      .then((res) => res.json())
      .then((data) => setprodect(data));
  }, []);
  return (
    <>
      {prodects && (
        <>
          {" "}
          <img style={{ width: "30%" }} src={prodects.image} alt="ghj" />
          <p>{prodects.description}</p>
          <h3>{prodects.price}$</h3>
        </>
      )}
    </>
  );
}
export default ProdectDetails;
