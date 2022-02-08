import classes from "./Search.module.scss";
import { useContext, useState } from "react";
import { AlertContext } from "../../contex/alert/alertContext";
import { GithubContext } from "../../contex/github/githubContext";

const Search = () => {
  const [value, setValue] = useState("");
  const { show } = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    if (value.trim()) {
      github.search(value.trim());
    } else {
      show("Введите данные пользователя");
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
