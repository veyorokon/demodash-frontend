import React from "react";
import {ImageFeature} from "views/_components";
import {FeatureLink} from "components";
import payments from "assets/svg/payments.svg";

function Payments(props) {
  return (
    <ImageFeature
      image={payments}
      title={"Payment processing and commission"}
      text={
        "Commission keeps storefronts and influencers paid when they generate a sale. With demodash, billing, commission and fees are handled automatically so everyone can focus on better product demos."
      }
    >
      <FeatureLink
        ml={0}
        color={"oranges.0"}
        fw={400}
        href="/ecommerce/how-it-works#billing"
      >
        Learn more about billing and fees.
      </FeatureLink>
    </ImageFeature>
  );
}
export default Payments;
