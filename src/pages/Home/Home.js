import classes from "./Home.module.scss";
import Search from "../../components/Search/Search";
import { Card } from "../../components/Card/Card";
import { useContext } from "react";
import { GithubContext } from "../../contex/github/githubContext";
import { Loader } from "../../components/Loader/Loader";

const Home = () => {
  const { users, loading } = useContext(GithubContext);

  return (
    <div className={classes.Home}>
      <div className={classes.HomeWrapper}>
        <Search />

        {loading ? (
          <Loader />
        ) : (
          <div className={classes.Cards}>
            {users.map((user) => {
              return <Card user={user} key={user.id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
