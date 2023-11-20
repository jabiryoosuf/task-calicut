import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { MdOutlineCloudDownload } from "react-icons/md";
import { RiMailLine } from "react-icons/ri";
import { RiCheckDoubleFill } from "react-icons/ri";
import classes from "./PlanCategory.module.css";

const PlanCategory = ({ btnColor }) => {
  return (
    <div className={classes.Plancategory}>
      <div className={classes.plan_desc}>
        <p className={classes.subheading}>Free Forever</p>
        <h2 className={classes.heading_text}>Free Starter</h2>
        <p className={classes.description}>
          the quickest and easiest way to try protocols with basic
          functionalities
        </p>
        <button
          className={classes.getStarted_btn}
          style={{ background: `${btnColor}` }}
        >
          Get Started{" "}
          <span className={classes.arrow_icon}>
            {" "}
            <CgArrowLongRight />{" "}
          </span>
        </button>
      </div>
      <div className={classes.plan_details}>
        <p className={classes.what_text}>What you'll get:</p>
        <ul className={classes.detail}>
          <li className={classes.detail_item}>
            <span>
              <GoPerson />
            </span>{" "}
            Upto 25 Users
          </li>
          <li className={classes.detail_item}>
            <span>
              <MdOutlineCloudDownload />
            </span>
            Upto 25gb Storage
          </li>
          <li className={classes.detail_item}>
            <span>
              <RiMailLine />
            </span>
            Email Support
          </li>
          <li className={classes.detail_item}>
            <span>
              <RiCheckDoubleFill />
            </span>
            Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes,
            Investor, Director and Team Management included
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlanCategory;
