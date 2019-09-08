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
});
