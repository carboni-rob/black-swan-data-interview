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

  it("should contain the input component", () => {
    const { getByPlaceholderText } = render(tree);

    expect(getByPlaceholderText("Enter GitHub username")).toHaveProperty(
      "className",
      "ant-input ant-input-lg"
    );
  });

  it("should contain a GitHub logo with correct class and src", () => {
    const { getByAltText } = render(tree);

    const logo = getByAltText("GitHub logo");

    expect(logo).toHaveProperty("className", "ghLogo greyScale");
    expect(logo).toHaveProperty("src", "http://localhost/Octocat.png");
  });

  it("should contain the search button", () => {
    const { getByText } = render(tree);

    getByText("Search GitHub for me");
  });
});
