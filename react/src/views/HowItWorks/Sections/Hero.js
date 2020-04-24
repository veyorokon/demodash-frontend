import React from "react";
import {Flex, Section, Box, Text, Grid, Image} from "components";
import {CallToAction} from "views/_components";

import {responsive as r} from "lib";
import styled from "styled-components";

import deliveries from "assets/svg/deliveries.svg";

const GridItemFlex = styled(Flex)`
  flex: 1 1 auto;
  flex-direction: column;
`;

const FlexGrid = styled(Grid)`
  flex-direction: column;
`;

class Hero extends React.Component {
  render() {
    return (
      <Section bg={"whites.0"} height={"fit-content"} overflow="hidden">
        <Box
          ml={r("3 -----> 4 5 6 -> 7")}
          mr={r("3 -----> 4 5 6 -> 7")}
          pt={r("5 --------> 6")}
          pb={r("5 --------> 6")}
        >
          <Flex
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="center"
          >
            <FlexGrid
              gridColumnGap={"5%"}
              gridTemplateColumns={r("repeat(2,1fr)")}
              display={r("flex -----> grid")}
              flexDirection="column"
              w={r("100%")}
            >
              <GridItemFlex mb={r("4 -----> 0")}>
                <Text
                  mb={3}
                  lineHeight={"1.18"}
                  as="h3"
                  fw={700}
                  fs={r("1.4rem ---> 1.6rem")}
                >
                  PRODUCT DEMOS
                </Text>
                <Text
                  mb={2}
                  mt={2}
                  lineHeight={"1.18"}
                  letterSpacing={"-.8px"}
                  as="h1"
                  fs={r("3.5rem ----> 4rem ----> 4.7rem")}
                >
                  Discover a new way to reach users
                </Text>
                <Text
                  mt={3}
                  mb={r("4")}
                  lineHeight={"1.3"}
                  letterSpacing={"-.5px"}
                  as="p"
                  fw={300}
                  fs={r("2rem --------> 2.4rem")}
                >
                  A single demo can be experienced by dozens, sometimes hundreds
                  of people. Through our network of storefronts, you can reach
                  thousands of potential users.
                </Text>
                <CallToAction
                  w={r("100% ---> 20rem")}
                  fs={"1.4rem"}
                  bg={"yellows.1"}
                  br={4}
                  fw={600}
                  link="/register"
                >
                  Create Account
                </CallToAction>
              </GridItemFlex>
              <GridItemFlex>
                <Image
                  m="auto"
                  src={deliveries}
                  maxWidth={"100%"}
                  w={"50rem"}
                />
              </GridItemFlex>
            </FlexGrid>
          </Flex>
        </Box>
      </Section>
    );
  }
}
export default Hero;
