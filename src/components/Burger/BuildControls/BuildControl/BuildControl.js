import React from "react";

import classes from "./BuildControl.module.css";

const buildControl = (props) => {
  const japaneseIngredient = (label) => {
    switch (label) {
      case "Salad":
        return <div className={classes.Label}>サラダ</div>;
      case "Cheese":
        return <div className={classes.Label}>チーズ</div>;
      case "Meat":
        return <div className={classes.Label}>お肉</div>;
      case "Bacon":
        return <div className={classes.Label}>ベーコン</div>;
      default:
        return <div></div>;
    }
  };
  return (
    <div className={classes.BuildControl}>
      {japaneseIngredient(props.label)}
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        減らす
      </button>
      <button className={classes.More} onClick={props.added}>
        追加
      </button>
    </div>
  );
};

export default buildControl;
