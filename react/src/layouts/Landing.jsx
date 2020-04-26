import React, {useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import {NavBar, FooterNav, FooterMeta, FooterCopy} from "views/_sections";
import {Drawer} from "views/_components";
import animateScrollTo from "animated-scroll-to";

import routes from "routes.js";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

function Landing() {
  useEffect(() => {
    const anchor = window.location.hash.toLowerCase();
    if (anchor) {
      let elem = document.querySelector(anchor);
      if (elem) {
        setTimeout(function() {
          animateScrollTo(elem);
        }, 500);
      }
    }
  });
  return (
    <>
      <Drawer />
      <NavBar />
      {switchRoutes}
      <FooterNav />
      <FooterMeta />
      <FooterCopy />
    </>
  );
}

export default Landing;
