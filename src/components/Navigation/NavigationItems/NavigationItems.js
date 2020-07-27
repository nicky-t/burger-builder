import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      ハンバーガー
    </NavigationItem>
    <NavigationItem link="/orders">注文確認</NavigationItem>
    <NavigationItem link="/auth">新規登録</NavigationItem>
  </ul>
);

export default navigationItems;
