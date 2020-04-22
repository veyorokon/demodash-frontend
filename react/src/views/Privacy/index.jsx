import React from "react";
import Solution from "./Sections/Solution";
import FooterNav from "./Sections/FooterNav";
import FooterMeta from "./Sections/FooterMeta";
import FooterCopy from "./Sections/FooterCopy";

export default () => {
  return (
    <React.Fragment>
      <Solution />
      <FooterNav />
      <FooterMeta />
      <FooterCopy />
    </React.Fragment>
  );
};
