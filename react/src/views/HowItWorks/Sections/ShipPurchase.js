import React from "react";
import {ImageFeature} from "views/_components";
import shipPackage from "assets/svg/ship-package.svg";

function ShipPurchase(props) {
  return (
    <ImageFeature
      image={shipPackage}
      title={"Ship purchased products"}
      imageWidth={"30rem"}
      text={`From your dashboard, you can watch in real-time how each store and influencer performs. After a sale is made you'll be notified and you can then ship purchases directly to the end user. It's really that simple!`}
    />
  );
}
export default ShipPurchase;
