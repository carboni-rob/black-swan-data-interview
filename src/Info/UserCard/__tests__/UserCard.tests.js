/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { render } from "@testing-library/react";
import UserCard from "../UserCard";

describe("<UserCard />", () => {
  const user = {
    name: "Roberto",
    company: "Black Swan Data",
    email: "carboni@robertocarboni.it",
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

  it("should contain a user name field with the appropriate text", () => {
    const { getByText } = render(tree);

    getByText("User name: Roberto");
  });

  it("should contain a user name field with 'not set' text when username is missing", () => {
    const { getByText } = render(<UserCard {...user} name="" />);

    getByText("User name: not set");
  });

  it("should contain a company field with the appropriate text", () => {
    const { getByText } = render(tree);

    getByText("Company: Black Swan Data");
  });

  it("should contain a company field with 'not set' text when company name is missing", () => {
    const { getByText } = render(<UserCard {...user} company="" />);

    getByText("Company: not set");
  });

  it("should contain an email field with the appropriate text", () => {
    const { getByText } = render(tree);

    getByText("Email: carboni@robertocarboni.it");
  });

  it("should contain an email field with 'not set' text when email is missing", () => {
    const { getByText } = render(<UserCard {...user} email="" />);

    getByText("Email: not set");
  });

  it("should contain a followers field with the appropriate followers count", () => {
    const { getByText } = render(tree);

    getByText("Followers: 100");
  });

  it("should contain a following field with the appropriate following count", () => {
    const { getByText } = render(tree);

    getByText("Following: 100");
  });
});
