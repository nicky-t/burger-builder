import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      ハンバーガー
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/orders">注文確認</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">認証</NavigationItem>
    ) : (
      <NavigationItem link="/logout">ログアウト</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
