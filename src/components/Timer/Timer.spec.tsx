import React from "react"
import { shallow } from "enzyme"
import Timer from "./Timer"

describe("Timer", () => {
  let container: any

  beforeEach(() => (container = shallow(<Timer />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  });

  it('should render a span', () => {
    expect(container.find("span").length).toEqual(1)
  });
})