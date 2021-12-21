import React, { useContext } from "react";
import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { ThemeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleCLick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleCLick}
        style={{ left: theme.state.darkmode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
