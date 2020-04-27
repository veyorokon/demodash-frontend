import React from "react";
import {ImageFeature} from "views/_components";
import productDemo from "assets/svg/product-demo.svg";

function About(props) {
  return (
    <ImageFeature
      imageAlign="left"
      image={productDemo}
      title={"A demo is worth a thousand users"}
      text={
        "Product demos are a powerful tool because they can be experienced at scale. With demodash, it's easy to distrubute product demos to influencers and storefronts where they can be seen or demoed the most."
      }
    />
  );
}
export default About;
