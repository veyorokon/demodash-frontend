import React from "react";
import {Switch, Route} from "react-router-dom";
import {NavBar, FooterNav, FooterMeta, FooterCopy} from "views/_sections";
import {Drawer} from "views/_components";

import routes from "routes.js";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

function Landing() {
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
