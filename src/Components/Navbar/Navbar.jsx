import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/section/:section"}>Section</Link>
        <Link to={"/bookdetailspage/:id"}>BookDetailsPage</Link>

        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
