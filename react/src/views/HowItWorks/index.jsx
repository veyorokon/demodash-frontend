import React from "react";
import Hero from "./Sections/Hero";
import Discover from "./Sections/Discover";
import DemoDelivery from "./Sections/DemoDelivery";
import Billing from "./Sections/Billing";
import ShipPurchase from "./Sections/ShipPurchase";
import CallToAction from "./Sections/CallToAction";

export default () => {
  return (
    <>
      <Hero />
      <Discover />
      <DemoDelivery />
      <Billing />
      <ShipPurchase />
      <CallToAction />
    </>
  );
};
