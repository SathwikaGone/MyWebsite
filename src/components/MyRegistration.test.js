import React from "react";
import { shallow } from "enzyme";
import MyRegistration from "./MyRegistration";

// describe("MyComponent", () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<MyComponent debug />);

//     expect(component).toMatchSnapshot();
//   });
// });

describe("Test case for login", () => {
  let wrapper;

  test("username check", () => {
    wrapper = shallow(<MyRegistration />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "uname", value: "sathwika" }
    });
    expect(wrapper.state("uname")).toEqual("sathwika");
  });

  test("username check length", () => {
    wrapper = shallow(<MyRegistration />);
    // wrapper.find('input[type="text"]').simulate("change", {
    //   target: { name: "uname", value: "sathwika" }
    // });
    wrapper.find("button").simulate("click");
    expect(wrapper.on).toEqual("sathwika");
  });
});
