import React, { useContext, useEffect } from "react";
import { GithubContext } from "../../contex/github/githubContext";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

const Profile = () => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);

  const { name } = useParams();

  useEffect(() => {
    // getUser(name);
    // getRepos(name);

    // console.log("Effect")
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Link></Link>
    </>
  );
};

export default Profile;
