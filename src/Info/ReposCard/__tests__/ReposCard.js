/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { render } from "@testing-library/react";
import ReposCard from "../ReposCard";

describe("<ReposCard />", () => {
  const repos = [
    {
      id: 1,
      name: "test1",
      clone_url: "test1/repos/url"
    },
    {
      id: 2,
      name: "test2",
      clone_url: "test2/repos/url"
    },
    {
      id: 3,
      name: "test3",
      clone_url: "test3/repos/url"
    }
  ];

  const tree = <ReposCard repos={repos} />;
  it("should match last snapshot", () => {
    const { container } = render(tree);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should contain a title with the number of repositories", () => {
    const { getByText } = render(tree);

    getByText("User Repositories: 3");
  });

  it("should contain a link with appropriate href for each element", () => {
    const { getByText } = render(tree);

    repos.map(repo => {
      expect(getByText(repo.name)).toHaveProperty(
        "href",
        `http://localhost/${repo.clone_url}`
      );

      return false;
    });
  });
});
