/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import Landing from "views/Landing";
import Privacy from "views/Legal/Privacy";
import Terms from "views/Legal/Terms";
import HowItWorks from "views/HowItWorks";
import StorefrontDemos from "views/Demos/StorefrontDemos";
import InfluencerDemos from "views/Demos/InfluencerDemos";
import Login from "views/Login";

const routes = [
  {
    path: "/how-it-works",
    name: "HowItWorks",
    rtlName: "HowItWorks",
    icon: null,
    component: HowItWorks,
    layout: "/"
  },
  {
    path: "/legal/privacy",
    name: "Privacy",
    rtlName: "Privacy",
    icon: null,
    component: Privacy,
    layout: "/"
  },
  {
    path: "/legal/terms",
    name: "Terms",
    rtlName: "Terms",
    icon: null,
    component: Terms,
    layout: "/"
  },
  {
    path: "/demos/storefront",
    name: "StorefrontDemos",
    rtlName: "StorefrontDemos",
    icon: null,
    component: StorefrontDemos,
    layout: "/"
  },
  {
    path: "/demos/influencer",
    name: "InfluencerDemos",
    rtlName: "InfluencerDemos",
    icon: null,
    component: InfluencerDemos,
    layout: "/"
  },
  {
    path: "/login",
    name: "Login",
    rtlName: "Login",
    icon: null,
    component: Login,
    layout: "/"
  },
  {
    path: "/",
    name: "Landing",
    rtlName: "Landing",
    icon: null,
    component: Landing,
    layout: "/"
  }
];

export default routes;
