import React from "react";

import classes from "./BuildControl.module.css";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>減らす</button>
    <button className={classes.More} onClick={props.added}>
      追加
    </button>
  </div>
);

export default buildControl;