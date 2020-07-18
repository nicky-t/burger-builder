import React from "react";

import classes from "./Order.module.css";

const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    let ingredientName = null;
    switch (ig.name) {
      case "salad":
        ingredientName = "サラダ";
        break;
      case "cheese":
        ingredientName = "チーズ";
        break;
      case "meat":
        ingredientName = "お肉";
        break;
      case "bacon":
        ingredientName = "ベーコン";
        break;
      default:
        ingredientName = "aaa";
        break;
    }
    return (
      <span
        style={{
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ig.name}
      >
        {ingredientName} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>材料： {ingredientOutput}</p>
      <p>
        価格： <strong>{props.price}円</strong>
      </p>
    </div>
  );
};

export default order;
