import classes from "./Search.module.scss";
import { useContext, useState } from "react";
import { AlertContext } from "../../contex/alert/alertContext";
import { GithubContext } from "../../contex/github/githubContext";

const Search = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    github.clearUsers();

    if (value.trim()) {
      alert.hide();
      github.search(value.trim());
    } else {
      alert.show("Введите данные пользователя");
    }
  };

  return (
    <div className={classes.Search}>
      <input
        type="text"
        placeholder="Введите ник пользователя"
        onKeyPress={onSubmit}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </div>
  );
};

export default Search;
