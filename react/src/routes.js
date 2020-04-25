/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import Landing from "views/Landing";
import Privacy from "views/Legal/Privacy";
import Terms from "views/Legal/Terms";
import HowItWorks from "views/Ecommerce/HowItWorks";
import Ecommerce from "views/Ecommerce/Landing";

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
    name: "Ecommerce",
    rtlName: "Ecommerce",
    icon: null,
    component: Ecommerce,
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
