import React from "react";
import {HeroOverlay, CallToAction} from "views/_components";
import {responsive as r} from "lib";
import {DASHBOARD_HOST} from "api";
import desktopMedia from "assets/images/compressed/main-hero-desktop.jpg";
import mobileMedia from "assets/images/compressed/main-mobile.jpg";

function Hero(props) {
  return (
    <HeroOverlay
      backgroundSize={r("cover --------> contain")}
      backgroundColor={"#98D7DC"}
      desktopMedia={desktopMedia}
      mobileMedia={mobileMedia}
      subTitle={"THE PRODUCT DEMO PLATFORM"}
      title={"Demos get users"}
      textSize={r("2rem ---> 2.2rem ----> 2.4rem")}
      text={`The easiest way for online brands to get their products into physical stores and in the hands of influencers.`}
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
