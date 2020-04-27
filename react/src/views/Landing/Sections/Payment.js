import React from "react";
import {ImageFeature} from "views/_components";
import payments from "assets/svg/payments.svg";

function Payments(props) {
  return (
    <ImageFeature
      image={payments}
      title={"Payment processing and commission"}
      text={
        "demodash handles payment processing and commission payments so everyone can focus on what matters most - product demos."
      }
    />
  );
}
export default Payments;
