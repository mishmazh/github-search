import React, { useContext, useEffect } from "react";
import classes from "./Profile.module.scss";
import { GithubContext } from "../../contex/github/githubContext";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { Repos } from "../../components/Repos/Repos";

const Profile = () => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);

  const { urlName } = useParams();

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);

    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loader />;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <div className={classes.Profile}>
      <Link to="/">На главную</Link>

      <div className={classes.ProfileWrapper}>
        <div className={classes.imgBlock}>
          <img src={avatar_url} alt={name} />
          {location && <h1>{name}</h1>}
          {location && <p>Location: {location}</p>}
        </div>
        <div className={classes.descBlock}>
          {bio && (
            <>
              <h3>BIO</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={html_url} target="_blank" rel="noreferrer">
            View profile
          </a>

          <ul>
            {login && (
              <li>
                <strong>Username: </strong>
                {login}
              </li>
            )}
            {company && (
              <li>
                <strong>Company: </strong>
                {company}
              </li>
            )}
            {login && (
              <li>
                <strong>Website: </strong>
                {blog}
              </li>
            )}
          </ul>

          <div className={classes.Badges}>
            <div>Followers: {followers}</div>
            <div>Following: {following}</div>
            <div>Repos: {public_repos}</div>
            <div>Gists: {public_gists}</div>
          </div>
        </div>
      </div>

      <Repos repos={repos}/>
    </div>
  );
};

export default Profile;
