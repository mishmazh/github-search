import classes from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={classes.Center}>
      <div className={classes.Loader}>
        <div />
        <div />
      </div>
    </div>
  );
};
