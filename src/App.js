import "./App.css";
import Navbar from "./Crud compo/Navbar";
import SideBar from "./Crud compo/sideBar";
import { Routes, Route } from "react-router-dom";
import Prodects from "./pages/Prodects";
import Home from "./pages/Home";
import ProdectDetails from "./pages/ProdectDetails";
import EditProdect from "./pages/EditProdect";
import Addprodect from "./pages/Addprodect";
import User from "./pages/User";
import AddUser from "./pages/AddUser";
import UserDetails from "./pages/UserDetails";
import EditUser from "./pages/EditUser";
import Contant from "./pages/Contant";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 saidbar">
          <SideBar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contant" element={<Contant />} />
            <Route path="prodects" element={<Prodects />} />
            <Route path="prodects/add" element={<Addprodect />} />
            <Route path="prodects/:prodectsid" element={<ProdectDetails />} />
            <Route path="prodects/edit/:id" element={<EditProdect />} />
            <Route path="User" element={<User />} />
            <Route path="User/add" element={<AddUser />} />
            <Route path="User/:Userid" element={<UserDetails />} />
            <Route path="User/edit/:id" element={<EditUser />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
