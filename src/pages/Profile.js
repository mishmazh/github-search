import React, { useContext, useEffect } from "react";
import { GithubContext } from "../contex/github/githubContext";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../components/Loader/Loader";
import { Repos } from "../components/Repos";

const Profile = () => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const { urlName } = useParams();

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
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
    <>
      <Link className="btn btn-primary mb-3" to="/">
        To main page
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img className="w-100" src={avatar_url} alt={name} />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>

            <div className="col">
              {bio && (
                <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              )}
              <a
                className="btn btn-dark"
                href={html_url}
                target="_blank"
                rel="noreferrer"
              >
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
                {blog && (
                  <li>
                    <strong>Website: </strong>
                    {blog}
                  </li>
                )}
              </ul>

              <div className="badge bg-primary">Followers: {followers}</div>
              <div className="badge bg-success">Following: {following}</div>
              <div className="badge bg-info">Repos: {public_repos}</div>
              <div className="badge bg-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos} />
    </>
  );
};

export default Profile;