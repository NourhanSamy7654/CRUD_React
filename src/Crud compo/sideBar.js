import { Link } from "react-router-dom";
function SideBar() {
  return (
    <>
      <h1>opertion</h1>
      <ul className="list-unstyled">
        <li>
          <Link to="/prodects">All Prodect</Link>
        </li>
        <li>
          <Link to="/User">All User</Link>
        </li>
      </ul>
    </>
  );
}
export default SideBar;
