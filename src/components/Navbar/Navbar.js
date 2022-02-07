import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <div>Github Поиск</div>

      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/about">Информация</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
