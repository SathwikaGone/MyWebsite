import React from "react";
import { useSelector } from "react-redux";

function SideBar() {
  const users = useSelector((state) => state.chatReducer.users);
  return (
    <aside id="sidebar" className="sidebar">
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </aside>
  );
}
export default SideBar;
