import React from "react";
import {HeroOverlay, CallToAction} from "views/_components";
import {responsive as r} from "lib";

import desktopMedia from "assets/images/compressed/main-hero-desktop.jpg";
import mobileMedia from "assets/images/compressed/main-hero-mobile.jpg";

function Hero(props) {
  return (
    <HeroOverlay
      backgroundSize={r("cover --------> contain")}
      backgroundColor={"#98D7DC"}
      desktopMedia={desktopMedia}
      mobileMedia={mobileMedia}
      subTitle={"DEMOS GET USERS"}
      title={"The product demo platform"}
      text={`Scale your business from demo to dropshipping and handle
        everything from payment processing and commission to
        analytics - on one platform.`}
    >
      <CallToAction
        width={r("100% ---> 20rem")}
        fs={"1.4rem"}
        bg={"yellows.0"}
        br={4}
        fw={600}
        link="/register"
      >
        Create Account
      </CallToAction>
    </HeroOverlay>
  );
}
export default Hero;
