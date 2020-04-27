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
import EcommerceStorefrontDemos from "views/Ecommerce/StorefrontDemos";

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
    name: "EcommerceStorefrontDemos",
    rtlName: "EcommerceStorefrontDemos",
    icon: null,
    component: EcommerceStorefrontDemos,
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
