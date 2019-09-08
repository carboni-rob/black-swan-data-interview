/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { render } from "@testing-library/react";
import UserCard from "../UserCard";

describe("<UserCard />", () => {
  const user = {
    name: "Roberto",
    company: "Black Swan Data",
    email: "carboni@robertocarboi.it",
    followers: 100,
    following: 100,
    avatar_url: "fake/avatar/path"
  };
  const tree = <UserCard {...user} />;

  it("should match last snapshot", () => {
    const { container } = render(tree);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should contain a title", () => {
    const { getByText } = render(tree);

    getByText("User Info:");
  });

  it("should contain an image with the correct src and class", () => {
    const { getByAltText } = render(tree);

    const avatar = getByAltText("User Avatar");

    expect(avatar).toHaveProperty("className", "userAvatar");
    expect(avatar).toHaveProperty("src", "http://localhost/fake/avatar/path");
  });
});
