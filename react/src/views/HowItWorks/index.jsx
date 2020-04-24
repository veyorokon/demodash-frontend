import React from "react";
import Hero from "./Sections/Hero";
import Discover from "./Sections/Discover";
import DemoDelivery from "./Sections/DemoDelivery";
import Billing from "./Sections/Billing";
import ShipPurchase from "./Sections/ShipPurchase";
import {NavBar, FooterNav, FooterMeta, FooterCopy} from "views/_sections";

export default () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Discover />
      <DemoDelivery />
      <Billing />
      <ShipPurchase />
      <FooterNav />
      <FooterMeta />
      <FooterCopy />
    </React.Fragment>
  );
};
