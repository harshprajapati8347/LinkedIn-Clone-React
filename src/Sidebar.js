import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

const Sidebar = () => {
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
        <Avatar className="sidebar__avatar" />
        <h2>Harsh Prajapati</h2>
        <h4>harshprajapati0123@gmail.com</h4>
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
