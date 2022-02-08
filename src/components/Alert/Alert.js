import classes from "./Alert.module.scss";
import { AlertContext } from "../../contex/alert/alertContext";
import { useContext } from "react";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert) return null;

  return (
    <div className={classes.Alert}>
      {alert.text}
      <button className="fa fa-times" onClick={hide} />
    </div>
  );
};
