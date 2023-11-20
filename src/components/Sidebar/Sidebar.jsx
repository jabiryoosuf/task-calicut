import React from "react";
import classes from "./sidebar.module.css";
import { FaChevronRight } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { PiFlowerTulipFill } from "react-icons/pi";
import { IoExtensionPuzzle } from "react-icons/io5";
import { PiWechatLogoFill } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.avatar_container}>
        <div className={classes.avatar}>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Profile"
          />
        </div>
        <h3 className={classes.name_text}>
          Ram mohan{" "}
          <span className={classes.icon}>
            <FaChevronRight />
          </span>
        </h3>
        <p className={classes.email_text}>rammohan@gmail.com</p>
      </div>

      <nav>
        <ul className={classes.nav_container}>
          <li className={classes.nav_item}>
            <span className={classes.nav_icon}>
              <BiSolidDashboard />
            </span>{" "}
            Dashboard
          </li>
          <li className={classes.nav_item}>
            <span className={classes.nav_icon}>
              <PiFlowerTulipFill />
            </span>
            Perks
          </li>
          <li className={classes.nav_item}>
            <span className={classes.nav_icon}>
              <IoExtensionPuzzle />
            </span>
            Addons
          </li>
          <li className={classes.nav_item}>
            <span className={classes.nav_icon}>
              <PiWechatLogoFill />
            </span>
            FAQ
          </li>
          <li className={classes.nav_item}>
            <span className={classes.nav_icon}>
              <MdOutlineSupportAgent />
            </span>
            Support
          </li>
        </ul>
      </nav>
      <span className={classes.logout}>
        Logout <IoMdLogOut />
      </span>
    </div>
  );
};

export default Sidebar;
