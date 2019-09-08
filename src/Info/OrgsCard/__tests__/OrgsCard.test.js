/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { render } from "@testing-library/react";
import OrgsCard from "../OrgsCard";

describe("<OrgsCard />", () => {
  const orgs = [
    {
      id: 1,
      login: "test1",
      url: "test1/orgs/url",
      avatar_url: "test1/avatar/url"
    },
    {
      id: 2,
      login: "test2",
      url: "test2/orgs/url",
      avatar_url: "test2/avatar/url"
    },
    {
      id: 3,
      login: "test3",
      url: "test3/orgs/url",
      avatar_url: "test3/avatar/url"
    }
  ];

  const tree = <OrgsCard orgs={orgs} />;

  it("should match last snapshot", () => {
    const { container } = render(tree);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should contain a title with the number of organizations", () => {
    const { getByText } = render(tree);

    getByText("User Organizations: 3");
  });

  it("should contain a link with appropriate href for each element", () => {
    const { getByText } = render(tree);

    orgs.map(org => {
      expect(getByText(org.login)).toHaveProperty(
        "href",
        `http://localhost/${org.url}`
      );

      return false;
    });
  });

  it("should contain an image with correct source and class for each element", () => {
    const { getByAltText } = render(tree);

    orgs.map(org => {
      expect(getByAltText(`${org.id} Organization Avatar`)).toHaveProperty(
        "src",
        `http://localhost/${org.avatar_url}`
      );
      expect(getByAltText(`${org.id} Organization Avatar`)).toHaveProperty(
        "className",
        "orgAvatar"
      );

      return false;
    });
  });
});
