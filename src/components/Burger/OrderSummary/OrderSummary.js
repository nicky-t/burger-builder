import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

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
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        キャンセル
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        完了する
      </Button>
    </Aux>
  );
};

export default orderSummary;
