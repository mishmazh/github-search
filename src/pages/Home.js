import Search from "../components/Search";
import { Card } from "../components/Card";
import { useContext } from "react";
import { GithubContext } from "../contex/github/githubContext";
import { Loader } from "../components/Loader";

const Home = () => {
  const { users, loading } = useContext(GithubContext);

  return (
    <>
      <Search />

      <div className="row">
        {loading ? (
          <Loader />
        ) : (
          users.map((user) => (
            <div className="col-sm-3 mb-4" key={user.id}>
              <Card user={user} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
