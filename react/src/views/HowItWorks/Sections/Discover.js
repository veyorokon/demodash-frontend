import React from "react";
import {Flex, Section, Box, Text, Grid, Image} from "components";

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
              <GridItemFlex order={r("1 -----> 0")}>
                <Image
                  m="auto"
                  src={interfaceSearch}
                  maxWidth={"100%"}
                  w={"40rem"}
                />
              </GridItemFlex>
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
                  Storefronts in your industry
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
                  When launching a product on demodash, you start by being
                  connected with storefronts related to your product's industry.
                  Targeting improves conversion rates by ensuring the people
                  most interested in your product are the ones who see the
                  storefront demo. You set a commission rate for your product
                  and invite storefronts to your demodash campaign.
                </Text>
              </GridItemFlex>
            </FlexGrid>
          </Flex>
        </Box>
      </Section>
    );
  }
}
export default Hero;
