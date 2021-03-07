import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { logout } from "./features/counter/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <>
      <div className="header">
        <div className="header__left">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
            alt="LinkedIn"
          />
          <div className="header__search">
            <SearchIcon />
            <input placeholder="Search" type="text" />
          </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption
            avatar="https://media-exp1.licdn.com/dms/image/C4D03AQGyBtCQv5z-Dw/profile-displayphoto-shrink_200_200/0/1608010276294?e=1620259200&v=beta&t=sZF-h1BDYIR7i2cVSgwWWZgJSgnjvfwq8DViJaYZJ44"
            onClick={logoutOfApp}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
