import { Link } from "react-router-dom";
import "./Navbar.css"
export const Navbar = () => {
  return (
    <>
      <div className="navbar">

       <Link to={"/"} className="home">Home</Link>
       <Link to={'/mystery'} className="mystery">Mystery</Link> 
       <Link to={'/technology'} className="technology">Technology</Link>
       <Link to={'/mythology'} className="mythology">Mythology</Link>
       <Link to={'/history'} className="history">History</Link>
       <Link to={'/data'} className="history">data</Link>
      </div>
    </>
  );
};
