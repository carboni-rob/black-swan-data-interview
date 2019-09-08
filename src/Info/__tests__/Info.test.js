/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { render } from "@testing-library/react";
import { Context } from "../../Store";
import Info from "../Info";

const store = {
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
        login: "test1",
        url: "test1/orgs/url",
        avatar_url: "test1/avatar/url"
      }
    ]
  },
  userRepos: [
    {
      id: 1,
      name: "test1",
      clone_url: "test1/repos/url"
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
});
