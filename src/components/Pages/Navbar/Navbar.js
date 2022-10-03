/* eslint-disable react/prop-types */
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <button className="navbar-btn" onClick={props.onClick}>
        Home
      </button>
      <button className="navbar-btn" onClick={props.click}>
        Page 1
      </button>
    </nav>
  );
};

export default Navbar;
