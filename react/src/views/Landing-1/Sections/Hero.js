import React from "react";
import {Box, Flex, Section, Button, ImageBox, Text} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";
import Signin from "./components/Signin";

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
`;

const NavBar = () => (
  <Nav>
    <Flex alignItems="center" w="100%" h={5}>
      <Text
        ml={3}
        lineHeight={"1.5"}
        as="p"
        fw={300}
        fs={"2.4rem"}
        color="navys.0"
      >
        DemoDash
      </Text>
    </Flex>
  </Nav>
);

const Wrapper = styled(Box)`
  z-index: 10;
`;
const Container = styled(Flex)`
  align-items: center;
`;
const LeftBox = styled(Box)`
  padding: 1rem;
`;

const RightBox = styled(Box)``;

const CallToAction = styled(Button)`
  height: 5rem;
  width: 16rem;
  cursor: pointer;
  min-width: fit-content;
  border: none;
  outline: none;
  letter-spacing: 0.2px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: black;
    background: #f3bd4e;
  }
`;

class Hero extends React.Component {
  render() {
    return (
      <Section height={r("110rem ------> 80rem")} overflow="hidden">
        <NavBar />
        <ImageBox pt={5}>
          <Wrapper w={"100%"} m={r("0 ------> 3")}>
            <Container
              flexDirection={r("column ------> row")}
              justifyContent="center"
              w={"100%"}
              h="100%"
              p={3}
            >
              <LeftBox paddingRight={"3rem"} w={r("100% ------> 45%")}>
                <Text
                  width="100%"
                  mb={3}
                  lineHeight={"1.18"}
                  as="h3"
                  fw={700}
                  fs={r("1rem ---> 1.4rem")}
                >
                  BRAND VISIBILITY
                </Text>
                <Text
                  width="100%"
                  mb={2}
                  mt={2}
                  lineHeight={"1.18"}
                  letterSpacing={"-.8px"}
                  as="h1"
                  fw={700}
                  fs={r("4rem ---> 5rem")}
                >
                  DemoDash gets your product demo, into small businesses.
                </Text>
                <Text
                  mt={3}
                  mb={4}
                  lineHeight={"1.5"}
                  letterSpacing={"-.5px"}
                  as="p"
                  fw={300}
                  fs={r("2rem ---> 2.4rem")}
                >
                  With your products in storefronts they can't help but be seen,
                  demoed and purchased by more users.
                </Text>
                <CallToAction bg={"yellows.0"} br={3}>
                  Get Started Today | Free
                </CallToAction>
              </LeftBox>
              <RightBox w={r("100% ------> 50%")}>
                <Signin
                  border="1px solid #eee"
                  m="auto"
                  mr={r("auto ------> unset")}
                />
              </RightBox>
            </Container>
          </Wrapper>
        </ImageBox>
      </Section>
    );
  }
}

export default Hero;
