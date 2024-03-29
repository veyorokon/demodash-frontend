import React from "react";
import {HeroOverlay, CallToAction} from "views/_components";
import {responsive as r} from "lib";

import desktopMedia from "assets/images/compressed/influencer-demo-desktop.jpg";
import mobileMedia from "assets/images/compressed/influencer-demo-mobile.jpg";
import {DASHBOARD_HOST} from "api";

function Hero(props) {
  return (
    <HeroOverlay
      backgroundColor="#dadadc"
      backgroundSize={r("cover --------> contain")}
      desktopMedia={desktopMedia}
      mobileMedia={mobileMedia}
      subTitle={"BRAND VISIBILITY"}
      title={"Find influencers for your product demo"}
      text={`With products being demoed by influencers, those products are seen and purchased by more users.`}
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
    </HeroOverlay>
  );
}
export default Hero;
