import React from "react";
import Privacy from "./Sections/Privacy";
import {NavBar, FooterNav, FooterMeta, FooterCopy} from "views/components";

export default () => {
  return (
    <React.Fragment>
      <NavBar />
      <Privacy />
      <FooterNav />
      <FooterMeta />
      <FooterCopy />
    </React.Fragment>
  );
};
