import React from "react";
import {ImageFeature} from "views/_components";
import storefrontWithProduct from "assets/svg/storefront-withproduct.svg";

function DemoDelivery(props) {
  return (
    <ImageFeature
      image={storefrontWithProduct}
      title={"Ship your product demo"}
      text={`For each store and/or influencer you choose to work with, you ship enough product for them to demo. Storefronts and influencers can then sell your product on their demodash store - the commission you set keeps them motivated!`}
    />
  );
}
export default DemoDelivery;
