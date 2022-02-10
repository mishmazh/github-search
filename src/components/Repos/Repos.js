import classes from "./Repos.module.scss";

export const Repos = ({ repos }) => (
  <div className={classes.Repos}>
    {repos.map((repo) => {
      return (
        <div key={repo.id}>
          <h5>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </h5>
        </div>
      );
    })}
  </div>
);
