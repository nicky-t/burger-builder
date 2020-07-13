import React from "react";

import classes from "./Logo.module.css";
import burgerLogo from "../../assets/images/burger-logo.png";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="ハンバーガー" />
  </div>
);

export default logo;