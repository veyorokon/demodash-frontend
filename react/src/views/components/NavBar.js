import React from "react";
import {Box, Flex, Text} from "components";
import styled from "styled-components";
// import logo from "assets/svg/logo.svg";

const Nav = styled(Box)`
  background-color: white;
  box-shadow: 0 2px 4px rgba(3, 27, 78, 0.1);
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  div:first-child {
    border-bottom: 1px solid #e4e8e8;
  }
  + section {
    padding-top: 6.4rem;
  }
`;

// const Logo = styled(Image)`
//   height: 3.4rem;
//   margin-left: 4rem;
// `;

const NavBar = () => (
  <Nav>
    <Flex alignItems="center" w="100%" h={5}>
      {/*<Logo src={logo} />*/}
      <Text
        ml={3}
        lineHeight={"1.5"}
        as="p"
        fw={300}
        fs={"2.4rem"}
        color="navys.0"
      >
        demodash
      </Text>
    </Flex>
  </Nav>
);

export default NavBar;
