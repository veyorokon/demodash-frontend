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
      <Section bg={"greys.1"} height={"fit-content"} overflow="hidden">
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
                  w={"50rem"}
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
                >
                  Search related storefronts
                </Text>
                <Text
                  mt={3}
                  mb={4}
                  lineHeight={"1.3"}
                  letterSpacing={"-.5px"}
                  as="p"
                  fw={300}
                  fs={r("1.8rem --------> 2rem")}
                >
                  Channels bring order and clarity to work — you can create them
                  for every project, topic, or team. When there’s a channel for
                  everything, you can focus on the conversations and work that
                  matters most to you.
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
