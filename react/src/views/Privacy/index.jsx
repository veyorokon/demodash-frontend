import React from "react";
import Solution from "./Sections/Solution";
import {NavBar, FooterNav, FooterMeta, FooterCopy} from "views/components";

export default () => {
  return (
    <React.Fragment>
      <NavBar />
      <Solution />
      <FooterNav />
      <FooterMeta />
      <FooterCopy />
    </React.Fragment>
  );
};
