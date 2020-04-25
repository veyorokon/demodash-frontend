import React from "react";
import {Feature} from "views/_components";
import storefrontWithProduct from "assets/svg/storefront-withproduct.svg";

function DemoDelivery(props) {
  return (
    <Feature
      image={storefrontWithProduct}
      title={"Ship your product demo"}
      text={`For each store you choose to work with, you ship enough product
        for them to demo on users at their location. Storefronts can
        then sell your product on their virtual demodash store - the
        commission you set keeps them motivated!`}
    />
  );
}
export default DemoDelivery;
