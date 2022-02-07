import classes from "./Card.module.scss";
import { Link } from "react-router-dom";

export const Card = () => (
    <div className={classes.Card}>
      <div className={classes.Image}>
        <img src={""} alt={""} />
      </div>
      <div className={classes.Desc}>
        <h5>React JS</h5>
        <Link to={"/profile/" + "react"}>Открыть</Link>
      </div>
    </div>
);
