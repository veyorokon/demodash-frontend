/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import Landing from "views/Landing";
import ForEcommerce from "views/ForEcommerce";
import Privacy from "views/Privacy";
import Terms from "views/Terms";
import HowItWorks from "views/HowItWorks";

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
    path: "/ecommerce",
    name: "ForEcommerce",
    rtlName: "ForEcommerce",
    icon: null,
    component: ForEcommerce,
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
