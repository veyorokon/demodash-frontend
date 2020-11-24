import React from "react";
import {ImageFeature} from "views/_components";
import productDemo from "assets/svg/product-demo.svg";

function About(props) {
  return (
    <ImageFeature
      imageAlign="left"
      image={productDemo}
      title={"Experiences that scale"}
      text={
        "Demos are a powerful tool because they're experiences that scale. With demodash, it's easy to distrubute product demos to influencers and stores where they can be seen or demoed the most."
      }
    />
  );
}
export default About;
