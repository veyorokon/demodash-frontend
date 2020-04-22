/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import Landing from "views/Landing";
import Privacy from "views/Privacy";

const routes = [
  {
    path: "/legal",
    name: "Privacy",
    rtlName: "Privacy",
    icon: null,
    component: Privacy,
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
