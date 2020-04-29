import React from "react";
import {Box, Flex, Text, Link, Hidden, Image} from "components";
import styled from "styled-components";
import {CallToAction} from "views/_components";
import {responsive as r} from "lib";
import menu from "assets/icons/menu.svg";
import logo from "assets/svg/logo.svg";

import {connect} from "react-redux";
import {toggleNav} from "redux/actions";

function mapDispatchToProps(dispatch) {
  return {
    toggleNav: () => dispatch(toggleNav())
  };
}

const Nav = styled(Box)`
  background-color: white;
  box-shadow: 0 2px 4px rgba(3, 27, 78, 0.1);
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  + section {
    padding-top: 6.4rem;
  }
`;

const NavFlex = styled(Flex)``;

const NavContainer = styled(Flex)`
  height: 100%;
  align-items: center;
  border-bottom: none;
`;

const NavLink = props => (
  <Text
    fs={r("1.4rem --------> 1.6rem")}
    fw={500}
    color={"blacks.0"}
    m="unset"
    mr={4}
    p={3}
    pl="unset"
    pr="unset"
    {...props}
  >
    <Link href={props.link} {...props}>
      {props.text}
    </Link>
  </Text>
);

const DesktopMenu = () => (
  <>
    <NavLink text="Sign In" link={"/login"} />
    <CallToAction
      link={"/register"}
      w={r("15rem")}
      fs={r("1.4rem")}
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
  </>
);

const TRANSITION = 8;

const _NavBar = props => {
  const {toggleNav} = props;
  return (
    <Nav>
      <NavFlex
        alignItems="center"
        justifyContent={"space-between"}
        w="auto"
        h={5}
        ml={r("4 -----> 5 ---> 6 7")}
        mr={r("4 -----> 5 ---> 6 7")}
      >
        <NavContainer alignItems="center" w={"10rem"}>
          <Hidden alignItems="center" down={TRANSITION}>
            <Image mr={3} cursor="pointer" h={"3rem"} w={"auto"} src={logo} />
          </Hidden>
          <Text
            lineHeight={"1.5"}
            as="p"
            fw={700}
            fs={"2.4rem"}
            color="navys.0"
          >
            <Link href={"/"}>demodash</Link>
          </Text>
        </NavContainer>

        <NavContainer justifyContent="space-around">
          <Hidden alignItems="center" down={TRANSITION - 1}>
            <NavLink text="For Products" link={"/ecommerce"} />
            <NavLink text="For Storefronts" link={"/ecommerce"} />
            <NavLink text="For Influencers" link={"/ecommerce"} />
            <NavLink mr={0} text="Pricing" link={"/how-it-works#billing"} />
          </Hidden>
        </NavContainer>
        <NavContainer justifyContent="flex-end">
          <Hidden alignItems="center" down={TRANSITION - 1}>
            <DesktopMenu />
          </Hidden>
          <Hidden alignItems="center" up={TRANSITION}>
            <Image
              onClick={toggleNav}
              cursor="pointer"
              h={"3rem"}
              w={"auto"}
              src={menu}
            />
          </Hidden>
        </NavContainer>
      </NavFlex>
    </Nav>
  );
};

const NavBar = connect(
  null,
  mapDispatchToProps
)(_NavBar);

export default NavBar;
