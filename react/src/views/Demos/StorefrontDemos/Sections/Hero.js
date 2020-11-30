import React from "react";
import {HeroOverlay, CallToAction} from "views/_components";
import {responsive as r} from "lib";
import {DASHBOARD_HOST} from "api";
import desktopMedia from "assets/images/compressed/products-desktop.jpg";
import mobileMedia from "assets/images/compressed/products-mobile.jpg";

function Hero(props) {
  return (
    <HeroOverlay
      backgroundColor="#dcd2ca"
      backgroundSize={r("cover ---------> contain")}
      desktopMedia={desktopMedia}
      mobileMedia={mobileMedia}
      subTitle={"BRAND VISIBILITY"}
      title={"Find stores for your product demo"}
      text={`With in store demos, products are seen,
      demoed and purchased by more users.`}
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
