import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("App", () => {
  let container: any;

  beforeEach(() => (container = shallow(<Button />)));

  it("should render a <button />", () => {
    expect(container.find("button").length).toEqual(1);
  });
});