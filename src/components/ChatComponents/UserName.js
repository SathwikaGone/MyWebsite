import React from "react";

import store from "../../redux/store";
import { useSelector } from "react-redux";

export default function UserName() {
  const username = useSelector(state => state.login.presentUser);
  return { username };
}
