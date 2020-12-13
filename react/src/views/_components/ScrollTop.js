import React, {Component} from "react";
import {Box, Icon, Flex} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";
import animateScrollTo from "animated-scroll-to";

import ArrowUp from "assets/icons/ArrowUp";

const ScrollDiv = styled(Box)`
  cursor: pointer;
  z-index: 200;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 400) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    animateScrollTo((0, 0));
  }

  render() {
    const {is_visible} = this.state;
    return (
      <ScrollDiv bg={"whites.0"} br={"5px"}>
        {is_visible && (
          <Flex p={2} onClick={this.scrollToTop}>
            <Icon h={r("1.8rem")}>
              <ArrowUp />
            </Icon>
          </Flex>
        )}
      </ScrollDiv>
    );
  }
}
