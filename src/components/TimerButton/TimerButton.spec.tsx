import React from "react";
import { shallow } from "enzyme";
import TimerButton from "./TimerButton";

describe("App", () => {
  let container: any;

  beforeEach(() => (container = shallow(<TimerButton />)));

  it("should render a <button />", () => {
    expect(container.find("button").length).toEqual(1);
  });
});