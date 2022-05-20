import { AlertContext } from "../contex/alert/alertContext";
import { useContext } from "react";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert) return null;

  return (
    <div
      className={`alert alert-${
        alert.type || "secondary"
      } alert-dismissible fade show`}
      role="alert"
    >
      {alert.text}
      <button
        type="button"
        className="btn-close"
        onClick={hide}
        aria-label="Close"
      ></button>
    </div>
  );
};
