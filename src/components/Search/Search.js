import classes from "./Search.module.scss"

const Search = () => {
  return (
    <div className={classes.Search}>
      <input type="text" placeholder="Введите ник пользователя" />
    </div>
  );
};

export default Search;