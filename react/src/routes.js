/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import Landing from "views/Landing";
import LandingEcommerce from "views/LandingEcommerce";
import Privacy from "views/Privacy";
import Terms from "views/Terms";
import HowItWorks from "views/HowItWorks";

const routes = [
  {
    path: "/ecommerce/how-it-works",
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
    path: "/ecommerce",
    name: "LandingEcommerce",
    rtlName: "LandingEcommerce",
    icon: null,
    component: LandingEcommerce,
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
