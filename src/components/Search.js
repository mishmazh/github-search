import { useContext, useState } from "react";
import { AlertContext } from "../contex/alert/alertContext";
import { GithubContext } from "../contex/github/githubContext";

const Search = () => {
  const [value, setValue] = useState("");
  const { show, hide } = useContext(AlertContext);
  const { clearUsers, search } = useContext(GithubContext);

  const onSubmit = (e) => {
    if (e.key !== "Enter") {
      return;
    }

    clearUsers();

    if (value.trim()) {
      hide();
      search(value.trim());
    } else {
      show("Please enter a username");
    }
  };

  return (
    <div className="form-group mb-4">
      <input
        className="form-control"
        type="text"
        placeholder="Enter username..."
        onKeyDown={onSubmit}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Search;
