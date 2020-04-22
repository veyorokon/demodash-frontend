import React from "react";
import Terms from "./Sections/Terms";
import {NavBar, FooterNav, FooterMeta, FooterCopy} from "views/components";

export default () => {
  return (
    <React.Fragment>
      <NavBar />
      <Terms />
      <FooterNav />
      <FooterMeta />
      <FooterCopy />
    </React.Fragment>
  );
};
