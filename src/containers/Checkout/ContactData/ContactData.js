import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "池川 豪斗",
        address: {
          street: "大阪市",
          zipCode: "537-0000",
          country: "Japan",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ loading: false }));
  };

  render() {
    let form = (
      <form action="">
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="お名前"
        ></input>
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="メールアドレス"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="住所"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="spostal"
          placeholder="郵便番号"
        ></input>
        <Button btnType="Success" clicked={this.orderHandler}>
          注文
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>あなたの住所などを入力して下さい</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
