import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <LanguageOutlinedIcon className="icon" />
          English
        </div>

        <div className="items">
          <DarkModeOutlinedIcon className="icon" />
        </div>

        <div className="items">
          <FullscreenExitOutlinedIcon className="icon" />
        </div>

        <div className="items">
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="counter">2</div>
        </div>

        <div className="items">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <div className="counter">3</div>
        </div>

        <div className="items">
          <FormatListBulletedOutlinedIcon className="icon" />
        </div>

        <div className="items">
          <img
            src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
