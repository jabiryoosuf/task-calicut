import React from 'react'
import classes from "./Dashboard.module.css"
import PaymentCard from '../PaymentCard/PaymentCard'
import PlanCategory from '../PlanCategory/PlanCategory'

const Dashboard = () => {
  return (
    <div className={classes.dashboard_main}>
        <h1 className={classes.heading_text}>Choose a plan just right for you !</h1>
        <div className={classes.plan_selector}>
            <span className={classes.active}>Monthly</span>
            <span>Annually <sup>-10%</sup></span>
        </div>
        <div className={classes.card_container}>
      <PaymentCard heading="Basic" price="9.99/mo" btnColor="#ffe7a9"/>
      <PaymentCard heading="Standard" price="99.99/mo" btnColor="#ffe7a9"/>
      <PaymentCard heading="Premium" price="199.99/mo" btnColor="#ffe7a9"/>
      </div>
      <div className={classes.card_container}>
        <PlanCategory btnColor="#ffe7a9"/>
      </div>
    </div>
  )
}

export default Dashboard
