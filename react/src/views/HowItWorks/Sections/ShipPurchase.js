import React from "react";
import {Flex, Section, Box, Text, Grid, Image} from "components";

import {responsive as r} from "lib";
import styled from "styled-components";

import shipPackage from "assets/svg/ship-package.svg";

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
          ml={r("2 3 -----> 5 6 -> 7")}
          mr={r("2 3 -----> 5 6 -> 7")}
          pt={r("5 -------->  6")}
          pb={r("5 -------->  6")}
        >
          <Flex
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="center"
          >
            <FlexGrid
              gridColumnGap={"10%"}
              gridTemplateColumns={r("repeat(2,1fr)")}
              display={r("flex -----> grid")}
              flexDirection="column"
              w={r("100%")}
            >
              <GridItemFlex justifyContent="center" mb={r("4 -----> 0")}>
                <Text
                  mb={2}
                  mt={2}
                  lineHeight={"1.18"}
                  letterSpacing={"-.8px"}
                  as="h1"
                  fs={r("3rem ----> 3.8rem")}
                  color="navys.0"
                >
                  Ship purchased products
                </Text>
                <Text
                  mt={3}
                  mb={4}
                  lineHeight={"1.3"}
                  letterSpacing={"-.5px"}
                  as="p"
                  fw={300}
                  fs={r("2rem --------> 2.2rem")}
                  color="navys.2"
                >
                  From your dashboard, you can watch in real-time how each store
                  performs. After being notified of a sale, you ship purchases
                  directly to the end user. It's really that simple!
                </Text>
              </GridItemFlex>
              <GridItemFlex order={r("1 -----> 0")}>
                <Image
                  m="auto"
                  src={shipPackage}
                  maxWidth={"100%"}
                  w={"30rem"}
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
