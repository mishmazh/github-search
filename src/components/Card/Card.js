import classes from "./Card.module.scss";
import { Link } from "react-router-dom";

export const Card = ({ user }) => (
  <div className={classes.Card}>
    <div className={classes.Image}>
      <img src={user.avatar_url} alt={user.login} />
    </div>
    <div className={classes.Desc}>
      <h5>{user.login}</h5>
      <Link to={"/profile/" + user.login}>Открыть</Link>
    </div>
  </div>
);
