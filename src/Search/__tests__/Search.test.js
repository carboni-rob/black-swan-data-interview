/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { render } from "@testing-library/react";
import { Context } from "../../Store";
import Search from "../Search";

describe("<Search />", () => {
  const dispatch = jest.fn();
  const store = {};

  const tree = (
    <Context.Provider value={{ store, dispatch }}>
      <Search />
    </Context.Provider>
  );

  it("should match last snapshot", () => {
    const { container } = render(tree);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should contain a logo with correct class and src", () => {
    const { getByAltText } = render(tree);

    const logo = getByAltText("Black Swan Data logo");

    expect(logo).toHaveProperty("className", "searchPageLogo");
    expect(logo).toHaveProperty("src", "http://localhost/black_swan_logo.png");
  });
});
