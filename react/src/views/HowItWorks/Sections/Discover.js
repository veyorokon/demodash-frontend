import React from "react";
import {ImageFeature} from "views/_components";
import interfaceSearch from "assets/svg/interface-search.svg";

function Discover(props) {
  return (
    <ImageFeature
      id={"targeting"}
      imageAlign="left"
      image={interfaceSearch}
      title={"Storefronts in your industry"}
      text={`When launching a product on demodash, you start by being
      connected with storefronts related to your product's industry.
      Targeting improves conversion rates by ensuring the people most
      interested in your product are the ones who see the storefront
      demo. You set a commission rate for your product and invite
      storefronts to your demodash campaign.`}
    />
  );
}
export default Discover;
