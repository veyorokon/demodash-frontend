import React from "react";
import {Flex, Section, Box, Text, Grid, Image, Hidden} from "components";

import {responsive as r} from "lib";
import styled from "styled-components";

import interfaceSearch from "assets/svg/interface-search.svg";

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
      <Section bg={"greys.1"} height={"fit-content"} overflow="hidden">
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
              <Hidden alignItems="center" down={5}>
                <GridItemFlex>
                  <Image
                    m="auto"
                    src={interfaceSearch}
                    maxWidth={"100%"}
                    w={"50rem"}
                  />
                </GridItemFlex>
              </Hidden>
              <GridItemFlex justifyContent="center" mb={r("4 -----> 0")}>
                <Text
                  mb={2}
                  mt={2}
                  lineHeight={"1.18"}
                  letterSpacing={"-.8px"}
                  as="h1"
                  fs={r("3.5rem ----> 4rem ----> 4.7rem")}
                >
                  Find a related storefront
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
                  demodash lets you find related storefronts to your product's
                  industry.
                </Text>
              </GridItemFlex>
              <Hidden alignItems="center" up={6}>
                <GridItemFlex>
                  <Image
                    m="auto"
                    src={interfaceSearch}
                    maxWidth={"100%"}
                    w={"50rem"}
                  />
                </GridItemFlex>
              </Hidden>
            </FlexGrid>
          </Flex>
        </Box>
      </Section>
    );
  }
}
export default Hero;
