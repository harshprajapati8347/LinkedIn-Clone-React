import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=715&q=80"
          alt=""
        />
        <Avatar
          src={user.photoUrl}
          className="sidebar__avatar"
        >
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <div className="sidebar__statNumber">2,543</div>
        </div>
        <div className="sidebar__stat">
          <p>Views on the Post</p>
          <div className="sidebar__statNumber">2,443</div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("Programming")}
        {recentItem("UI/UX")}
        {recentItem("Design")}
        {recentItem("software")}
        {recentItem("dev")}
      </div>
    </div>
  );
};

export default Sidebar;
