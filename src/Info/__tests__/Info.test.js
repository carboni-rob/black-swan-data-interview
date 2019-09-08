/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { render } from "@testing-library/react";
import { Context } from "../../Store";
import Info from "../Info";

let store = {
  userData: {
    user: {
      name: "Roberto",
      company: "Black Swan Data",
      email: "carboni@robertocarboni.it",
      followers: 100,
      following: 100,
      avatar_url: "fake/avatar/path"
    },
    orgs: [
      {
        id: 1,
        login: "org1",
        url: "org1/orgs/url",
        avatar_url: "org1/avatar/url"
      }
    ]
  },
  userRepos: [
    {
      id: 1,
      name: "repo1",
      clone_url: "repo1/repos/url"
    }
  ]
};

describe("<Info />", () => {
  const dispatch = jest.fn();
  const tree = (
    <Context.Provider value={{ store, dispatch }}>
      <Info />
    </Context.Provider>
  );

  it("should match last snapshot", () => {
    const { container } = render(tree);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should contain a back button", () => {
    const { getByText } = render(tree);

    getByText("BACK");
  });

  it("should contain a logo with correct class and src", () => {
    const { getByAltText } = render(tree);

    const logo = getByAltText("Black Swan Data logo");

    expect(logo).toHaveProperty("className", "infoPageLogo");
    expect(logo).toHaveProperty("src", "http://localhost/black_swan_logo.png");
  });

  it("should contain a UserCard", () => {
    const { getByText } = render(tree);

    getByText("User name: Roberto");
  });

  it("should not contain a UserCard when no user info is in the store", () => {
    store = { ...store, userData: undefined };
    const { queryByText } = render(
      <Context.Provider value={{ store, dispatch }}>
        <Info />
      </Context.Provider>
    );

    expect(queryByText("User name: Roberto")).toBeNull();
  });

  it("should contain a ReposCard", () => {
    const { getByText } = render(tree);

    getByText("User Repositories: 1");
  });

  it("should not contain a ReposCard when no repos info is in the store", () => {
    store = { ...store, userRepos: undefined };
    const { queryByText } = render(
      <Context.Provider value={{ store, dispatch }}>
        <Info />
      </Context.Provider>
    );

    expect(queryByText("User Repositories: 1")).toBeNull();
  });

  it("should contain a OrgsCard", () => {
    const { getByText } = render(tree);

    getByText("User Organizations: 1");
  });

  it("should not contain a OrgsCard when no orgs info is in the store", () => {
    store = { ...store, userData: undefined };
    const { queryByText } = render(
      <Context.Provider value={{ store, dispatch }}>
        <Info />
      </Context.Provider>
    );

    expect(queryByText("User Organizations: 1")).toBeNull();
  });
});
