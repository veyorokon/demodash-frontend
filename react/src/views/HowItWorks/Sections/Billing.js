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
        "demodash handles payment processing. A standard 2.9% + 0.30 cent fee is assessed for credit transactions and demodash charges a 0.99 cent fee per sale. The storefront earns the commission agreed upon and the balance of the sale is added to your account. You'll be notified of any new sale!"
      }
    />
  );
}
export default Billing;
