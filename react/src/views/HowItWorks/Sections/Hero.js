import React from "react";
import {ImageFeature} from "views/_components";
import deliveries from "assets/svg/deliveries.svg";
import {CallToAction} from "views/_components";
import {responsive as r} from "lib";
import {DASHBOARD_HOST} from "api";
function Hero(props) {
  return (
    <ImageFeature
      bg={"blues.0"}
      subTitle={"PRODUCT DEMOS"}
      subTitleColor={"whites.0"}
      image={deliveries}
      title={"A new way to reach users"}
      titleColor="whites.0"
      text={`A single demo can be experienced by dozens, sometimes hundreds
      of people. With demodash, you can reach thousands of potential users.`}
      textColor={"whites.0"}
    >
      <CallToAction
        width={r("100% ---> 20rem")}
        fs={"1.4rem"}
        bg={"yellows.0"}
        br={4}
        fw={600}
        link={DASHBOARD_HOST + "/register"}
      >
        Create Account
      </CallToAction>
    </ImageFeature>
  );
}
export default Hero;
