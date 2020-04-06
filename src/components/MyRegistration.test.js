import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import MyRegistration from "./MyRegistration";
import * as Actions from "./../redux/actions";

// describe("MyComponent", () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<MyComponent debug />);

//     expect(component).toMatchSnapshot();
//   });
// });

// it(" div should not crash", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<MyRegistration />, div);
// });

// describe("Test case for login", () => {
//   let wrapper;

//   test("username check", () => {
//     wrapper = shallow(<MyRegistration />);
//     wrapper.find('input[type="text"]').simulate("change", {
//       target: { name: "uname", value: "sathwika" }
//     });
//     expect(wrapper.state("uname")).toEqual("sathwika");
//   });
//   test("username check length", () => {
//     wrapper = shallow(<MyRegistration />);
//     // wrapper.find('input[type="text"]').simulate("change", {
//     //   target: { name: "uname", value: "sathwika" }
//     // });
//     wrapper.find("button").simulate("click");
//     expect(wrapper.on).toEqual("sathwika");
//   });
// });
let user = {
  name: "Hello",
  email: "gonegghhjjkk@gmail.com",
  phonenumber: "6605280260",
  password: "235689147",
};
store.dispatch(Actions.registerUser(user));

const setup = () => {
  const component = shallow(<MyRegistration store={store} />);
  return component;
};
describe("MyRegistration component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("Should render without crash", () => {
    const wrapper = component.find(`[data-test='Name']`);
    console.log(wrapper.length);
    expect(wrapper.length).toBe(1);
  });
});
