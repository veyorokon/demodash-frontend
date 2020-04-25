import React from "react";
import styled, {css} from "styled-components";
import {system} from "styled-system";
import {Grid, Image, Box} from "components";

import {connect} from "react-redux";
import {toggleNav} from "redux/actions";

import close from "assets/icons/close.svg";

function mapDispatchToProps(dispatch) {
  return {
    toggleNav: () => dispatch(toggleNav())
  };
}
const mapStateToProps = state => {
  const {navOpen} = state;
  return {
    navOpen
  };
};

const Icon = styled(Image)`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const DrawerTitle = styled(Box)`
  align-items: center;
  grid-row: 1;
  display: flex;
  z-index: 60;
`;

export const DrawerContainer = styled(Grid)`
  position: fixed;
  top: 0;
  z-index: 50;
  grid-template-rows: 8rem 6rem 1fr;
  ${props =>
    props.open
      ? css`
          ${system({
            transform: true
          })}
          transition-duration: 0.5s;
          transition-timing-function: cubic-bezier(0.3, 0, 0, 1);
        `
      : css`
          transition-property: transform, -webkit-transform;
          transition-duration: 0.3s;
          transition-timing-function: cubic-bezier(0.3, 0, 0, 1);
          transform: translate3d(100vw, 0, 0);
        `};
`;

const _Drawer = props => {
  const {toggleNav} = props;
  return (
    <DrawerContainer bg={"whites.0"} w={"100%"} h={"100%"} open={props.navOpen}>
      <DrawerTitle w={"100%"} h={"100%"} pl={3} pr={3}>
        <Icon
          w={"1.86rem"}
          h={"1.86rem"}
          cursor="pointer"
          src={close}
          onClick={toggleNav}
        />
      </DrawerTitle>
    </DrawerContainer>
  );
};

const Drawer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Drawer);

export default Drawer;
