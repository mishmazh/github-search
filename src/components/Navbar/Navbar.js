import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <div>Github Search</div>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
