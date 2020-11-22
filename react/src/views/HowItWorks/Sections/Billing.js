import React from "react";
import {ImageFeature} from "views/_components";
import billing from "assets/svg/billing.svg";

function Billing(props) {
  return (
    <ImageFeature
      id={"billing"}
      imageAlign="left"
      image={billing}
      title={"Sales, payment processing and commission"}
      text={
        "A standard 2.9% + 0.30 cent fee is assessed for credit transactions on the demodash store. Additionally, demodash charges a 0.99 cent fee per sale. Stores and influencers earn the commission agreed upon and the balance of the sale is added to your account."
      }
    />
  );
}
export default Billing;
