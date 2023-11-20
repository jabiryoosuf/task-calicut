import React from "react";
import classes from "./navbar.module.css";
import logo from "../../assets/logo.png";
import roundLogo from "../../assets/round-logo.png";
import { FaChevronDown } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo_container}>
        <img className={classes.logo} src={logo} alt="Logo" />
        <div className={classes.triangle}></div>
      </div>
      <div className={classes.company_container}>
      <div className={classes.company}>
        <img className={classes.roundLogo} src={roundLogo} alt="logo" />
        XYZ Enterprizes Pvt.Ltd
      </div>
      <div className={classes.showmore}><FaChevronDown /></div>
      </div>
    </nav>
  );
};

export default Navbar;
