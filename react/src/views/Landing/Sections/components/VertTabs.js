/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import React from "react";
import {Box, Flex, Text} from "components";
import styled, {css} from "styled-components";
import {responsive as r} from "lib";

const Hide = styled(Box)`
  transition: opacity 0.4s ease-in-out;
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

const Menu = styled(Flex)`
  z-index: 10;
`;

const PanelNavigation = styled(Flex)`
  justify-content: end;
`;

const NavigationTabItem = styled(Flex)`
  padding: 1.75rem 0;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  transition: border-color 0.275s ease;
  border-width: 3px;
  border-style: solid;
  border-color: unset;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

const Navigation = props => {
  return <PanelNavigation {...props}>{props.children}</PanelNavigation>;
};

const Header = styled(Text)`
  transition: all 0.3s ease-in-out;
  outline: none;

  &:hover {
    color: #112237;
  }
`;

export const TabPanel = props => {
  return (
    <Flex width="100%" margin={"0 auto"} {...props}>
      {props.children}
    </Flex>
  );
};

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
        <Navigation
          flexDirection={r(" row ----> column")}
          w={r("100% ----> 9rem")}
          pt={r("3 ----> 6")}
          pb={r("3 ----> 6")}
          overflow="hidden"
          bg="white"
          h={r("3rem ----> 100%")}
        >
          {this.props.tabHeaders.map((elem, index) => {
            const isActive = selected === index;
            const color = isActive ? "navys.0" : "greys.0";
            const borderColor = isActive ? "#ED8A70" : "#e5e8ed";
            return (
              <NavigationTabItem
                borderRightColor={r("unset")}
                borderTopColor={r("unset")}
                borderBottomColor={r(`${borderColor} ---->  unset `)}
                borderLeftColor={r(`unset  ---->  ${borderColor}`)}
                onClick={() => this.handleChange(index)}
                color={"whites.0"}
                key={index}
                active={isActive}
              >
                <Header fw={500} color={color}>
                  {elem}
                </Header>
              </NavigationTabItem>
            );
          })}
        </Navigation>
        {this.props.children.map((elem, index) => (
          <Hide key={index} showing={selected === index}>
            {elem}
          </Hide>
        ))}
      </React.Fragment>
    );
  }
}

class VertTabs extends React.Component {
  render() {
    return (
      <Menu
        flexDirection={r("column ----> row")}
        h="100%"
        bg="whites.0"
        {...this.props}
      >
        <NavigationTabs selected={0} tabHeaders={this.props.tabHeaders}>
          {this.props.children}
        </NavigationTabs>
      </Menu>
    );
  }
}

export default VertTabs;
