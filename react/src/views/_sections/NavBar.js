import React from "react";
import {Box, Flex, Text, Link} from "components";
import styled from "styled-components";
import {CallToAction} from "views/_components";
import {responsive as r} from "lib";

// import logo from "assets/svg/logo.svg";

const Nav = styled(Box)`
  background-color: white;
  box-shadow: 0 2px 4px rgba(3, 27, 78, 0.1);
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  + section {
    padding-top: 6.4rem;
  }
`;

// const Logo = styled(Image)`
//   height: 3.4rem;
//   margin-left: 4rem;
// `;

const NavFlex = styled(Flex)``;

const NavContainer = styled(Flex)`
  height: 100%;
  align-items: center;
  border-bottom: none;
  & > div {
  }
`;

const NavLink = props => (
  <Text
    fs={"1.2rem"}
    fw={500}
    color={"blacks.0"}
    m="unset"
    mr={3}
    p={3}
    pl="unset"
    pr="unset"
  >
    <Link href={props.link}>{props.text}</Link>
  </Text>
);

const NavBar = () => (
  <Nav>
    <NavFlex
      alignItems="center"
      justifyContent={"space-between"}
      w="auto"
      h={5}
      ml={r("4 ----> 5")}
      mr={r("4 ----> 5")}
    >
      {/*<Logo src={logo} />*/}
      <NavContainer>
        <Text lineHeight={"1.5"} as="p" fw={300} fs={"2.4rem"} color="navys.0">
          demodash
        </Text>
      </NavContainer>

      <NavContainer justifyContent="flex-end">
        <NavLink text="Sign In" link={"/"} />
        <CallToAction
          w={r("15rem")}
          fs={"1.4rem"}
          fw={600}
          h="3.8rem"
          bg={"oranges.1"}
          hoverBg={"#212C39"}
          hoverColor={"white"}
          br={4}
          color="whites.0"
        >
          Get Started
        </CallToAction>
      </NavContainer>
    </NavFlex>
  </Nav>
);

export default NavBar;
