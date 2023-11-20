import React from "react";
import classes from "./Dashboard.module.css";
import PaymentCard from "../PaymentCard/PaymentCard";
import PlanCategory from "../PlanCategory/PlanCategory";

const Dashboard = () => {
  return (
    <div className={classes.dashboard_main}>
      <h1 className={classes.heading_text}>
        Choose a plan just right for you !
      </h1>
      <div className={classes.plan_selector}>
        <span className={classes.active}>Monthly</span>
        <span>
          Annually <sup>-10%</sup>
        </span>
      </div>
      <div className={classes.card_container}>
        <PaymentCard heading="Basic" price="9.99/mo" btnColor="#ffe7a9" />
        <PaymentCard heading="Standard" price="99.99/mo" btnColor="#ff9494" />
        <PaymentCard heading="Premium" price="199.99/mo" btnColor="#e7a2ff" />
      </div>
      <div className={classes.card_category_container}>
        <PlanCategory
          subheading="Free Forever"
          heading="Free Starter"
          desc="the quickest and easiest way to try protocols with basic
          functionalities"
          btntext="Get Started"
          btnColor="#c6ff8e"
        />
        <PlanCategory
          subheading="Let's Connect"
          heading="Enterprise Plan"
          desc="Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success"
          btntext="Contact Us"
          btnColor="#8ab9ff"
        />
      </div>
    </div>
  );
};

export default Dashboard;
