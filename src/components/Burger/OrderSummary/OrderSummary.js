import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    switch (igKey) {
      case "salad":
        return (
          <li key={igKey}>
            <span>サラダ</span>： {props.ingredients[igKey]}
          </li>
        );
      case "cheese":
        return (
          <li key={igKey}>
            <span>チーズ</span>： {props.ingredients[igKey]}
          </li>
        );
      case "meat":
        return (
          <li key={igKey}>
            <span>お肉</span>： {props.ingredients[igKey]}
          </li>
        );
      case "bacon":
        return (
          <li key={igKey}>
            <span>ベーコン</span>： {props.ingredients[igKey]}
          </li>
        );
      default:
        return <li></li>;
    }
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
