import React from "react";
import {Flex, Section, Box, Text, Grid, Image} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";
import logo from "assets/svg/logo.svg";

const Logo = styled(Image)``;

const GridItemFlex = styled(Flex)`
  flex: 1 1 auto;
  flex-direction: column;
`;
const GridItem = props => (
  <GridItemFlex>
    <Text m="unset" p="1rem 0">
      TITLE
    </Text>
    <Text>Elem</Text>
  </GridItemFlex>
);

class Footer extends React.Component {
  render() {
    return (
      <Section bg={"whites.0"} height={"fit-content"} overflow="hidden">
        <Box
          ml={r("2 ---> 3 -> 4 5 6 -> 7")}
          mr={r("2 ---> 3 -> 4 5 6 -> 7")}
          pt={r("5 -------> 6")}
          pb={r("5")}
        >
          <Flex
            flexDirection={r("column -----> row")}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Logo src={logo} w="6.8rem" h="6.8rem" />
            <Grid
              gridTemplateColumns={r("repeat(2,1fr) ----> repeat(4,1fr)")}
              w={"100%"}
            >
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
            </Grid>
          </Flex>
        </Box>
      </Section>
    );
  }
}
export default Footer;
