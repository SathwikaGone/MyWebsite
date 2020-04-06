import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import MyLogin from "./MyLogin";
import * as Actions from "./../redux/actions";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
import { Provider } from "react-redux";

const store = mockStore({
  signUpUsersList: [
    {
      _id: "5e52fd0ab74a2315cc64c79b",
      name: "Sathwika",
      email: "gonesathwika@gmail.com",
      phonenumber: 6605280260,
      password: "159263487",
    },
    {
      _id: "5e52ff75b74a2315cc64c79e",
      name: "Laxmi",
      email: "Laxmi@gmail.com",
      phonenumber: 6605280260,
      password: "159263487",
    },
  ],
});

const setup = () => {
  return shallow(
    <Provider store={store}>
      <MyLogin />
    </Provider>
  );
};
describe("MyLogin component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  //trying to know weather the component is rendered
  it("Should render without crash", () => {
    expect(component.exists()).toBe(true);
    // const wrapper = component.find(`[data-test='Name']`);
    //     console.log(wrapper.length);
    //     expect(wrapper.length).toBe(1);
  });

  //Checking wheather the component has input fiels email
  // trying tp change the value of input field and chacking the same value as an output

  it("should able to change the username ", () => {
    expect(component.contains('[htmlFor="email"]')).toEqual(true);
    //   .at(0)
    //   .Simulate.onChange({ target: { value: "sathwika@gmail.com" } });
    // ("onChange", { target: { value: "sathwika@gmail.com" } });
    // expect(component.find('input[type="email"]').props().value()).toEqual(
    //   "sathwika@gmail.com"
    // );

    // expect(component.find("input").get(0).props.value).toEqual(
    //   "sathwika@gmail.com"
    // );
  });
});
