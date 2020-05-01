/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import React from "react";
import {Box, Flex} from "components";
import styled, {css} from "styled-components";

const Menu = styled(Flex)`
  z-index: 10;
  max-width: 100%;
  transition: margin 0.2s;
  flex-direction: column;
`;
const NavigationBullet = styled(Flex)`
  cursor: pointer;
  transition: all 0.3s ease-out;
  outline: none;
  height: 1.4rem;
  width: 1.4rem;
  background: grey;
  border-radius: 50%;

  ${props =>
    props.active &&
    css`
      color: black;
      font-weight: 600;
      background: black;
    `}
`;

const PanelNavigation = styled(Flex)`
  width: fit-content;
  align-self: center;
  height: 100%;
  color: black;
  order: 1;
  & > ${NavigationBullet} {
    margin-right: 2rem;
  }
  & > :last-child {
    margin-right: 0;
  }
`;

const Hide = styled(Box)`
  transition: opacity 0.8s ease-in-out;
  visibility: hidden;
  height: 0;
  width: 0;
  opacity: 0;
  ${props =>
    props.showing &&
    css`
      height: 100%;
      width: 100%;
      opacity: 1;
      visibility: visible;
    `}
`;

class NavigationTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected || 0
    };
  }

  getInitialState() {
    return {
      selected: this.props.selected || 0
    };
  }

  handleChange = index => {
    this.setState({selected: index});
  };

  render() {
    const {selected} = this.state;
    return (
      <React.Fragment>
        <PanelNavigation>
          {this.props.children.map((elem, index) => (
            <NavigationBullet
              p={2}
              alignItems="center"
              justifyContent="center"
              h="100%"
              onClick={() => this.handleChange(index)}
              color={"blacks.0"}
              key={index}
              active={selected === index}
            />
          ))}
        </PanelNavigation>
        {this.props.children.map((elem, index) => (
          <Hide key={index} showing={selected === index}>
            {elem}
          </Hide>
        ))}
      </React.Fragment>
    );
  }
}

class Testimonial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <Menu {...this.props}>
        <NavigationTabs selected={0} children={this.props.children} />
      </Menu>
    );
  }
}

export default Testimonial;
