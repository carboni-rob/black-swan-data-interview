/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { render } from "@testing-library/react";
import ReposCard from "../ReposCard";

describe("<ReposCard />", () => {
  const tree = <ReposCard />;
  it("should match last snapshot", () => {
    const { container } = render(tree);
  });
});
