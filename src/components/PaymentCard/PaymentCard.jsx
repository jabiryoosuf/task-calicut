import React from "react";
import classes from "./PaymentCard.module.css";
import { CgArrowLongRight } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { MdOutlineCloudDownload } from "react-icons/md";
import { RiMailLine } from "react-icons/ri";
import { MdPlayArrow } from "react-icons/md";

const PaymentCard = ({heading,price,btnColor}) => {
  return (
    <div className={classes.paymentCard}>
      <div className={classes.first_section}>
        <h2 className={classes.heading_text}>{heading}</h2>
        <span className={classes.cross_text}>$ 89.99/mo</span>
        <p className={classes.price_text}>$ {price}</p>
        <button className={classes.getStarted_btn} style={{background:`${btnColor}`}}>
          Get Started{" "}
          <span className={classes.arrow_icon}>
            {" "}
            <CgArrowLongRight />{" "}
          </span>
        </button>
      </div>


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
      </ul>
      <p className={classes.explore_text}>Explore Features <span><MdPlayArrow style={{color:`${btnColor}`}}/></span></p>
    </div>
  );
};

export default PaymentCard;
