import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });
  it("ログインしていなければ、２つの<NavigationItem />をレンダリングする", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it("ログインしていれば、３つの<NavigationItem />をレンダリングする", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it("ログインしていれば、ログアウトをレンダリングする", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(
        <NavigationItem link="/logout">ログアウト</NavigationItem>
      )
    ).toEqual(true);
  });
});
