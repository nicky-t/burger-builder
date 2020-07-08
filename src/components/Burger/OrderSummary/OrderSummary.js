import React from "react";

import Aux from "../../../hoc/Aux";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>ご注文</h3>
      <p>このバーガーは、次の材料が入っています：</p>
      <ul>{ingredientSummary}</ul>
      <p>お支払いを完了しますか？</p>
    </Aux>
  );
};

export default orderSummary;
