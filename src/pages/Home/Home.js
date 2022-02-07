import classes from "./Home.module.scss";
import Search from "../../components/Search/Search";
import { Card } from "../../components/Card/Card";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.HomeWrapper}>
        <Search />
        <div className={classes.Cards}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
