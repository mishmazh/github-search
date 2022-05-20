import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand ms-3 fs-4">Github Search</div>

    <ul className="navbar-nav px-3 fs-5">
      <li className="nav-item ">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
