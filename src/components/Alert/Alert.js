import classes from "./Alert.module.scss";

export const Alert = ({ alert }) => {
  return (
    <div className={classes.Alert}>
      {alert.text}
      <button className="fa fa-times"/>
    </div>
  );
};
