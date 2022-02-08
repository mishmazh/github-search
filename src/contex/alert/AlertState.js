import { AlertContext } from "./alertContext";
import { useReducer } from "react";
import { alertReducer } from "./alertReducer";
import { HIDE_ALERT, SHOW_ALERT } from "../types";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, null);

  const show = (text, type) => {
    dispatch({
      type: SHOW_ALERT,
      payload: { type, text },
    });
  };

  const hide = () => {
    dispatch({
      type: HIDE_ALERT,
    });
  };

  return (
    <AlertContext.Provider value={{ show, hide, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};
