import React from "react";
import {Flex, Section, Box, Image, Text} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

import dashboard from "assets/icons/dashboard.svg";
import targeting from "assets/icons/targeting.svg";

const Features = styled(Flex)`
  & > :first-child {
    padding-left: unset;
  }
  & > :last-child {
    padding-right: unset;
    margin-bottom: unset;
  }
`;

const FeatureTitle = styled(Text)`
  text-transform: uppercase;
`;

const FeatureBox = props => (
  <Box p={r("2 -----> 3 4 -> 5")} mb={r("5 ------> 0")} {...props}>
    <Image mb={3} h={r("6.6rem")} src={props.icon} />
    <FeatureTitle
      mt={3}
      mb={4}
      lineHeight={"1.5"}
      as="h2"
      fw={500}
      fs={r("1.8rem 2.2rem")}
      textAlign="center"
      letterSpacing={".05em"}
      color="navys.0"
    >
      {props.title}
    </FeatureTitle>
    <Text
      mt={3}
      mb={3}
      fontWeight={"400"}
      fontSize={r("1.6rem 1.7rem")}
      lineHeight={"2"}
      color="navys.2"
    >
      {props.text}
    </Text>
  </Box>
);

class Solution extends React.Component {
  render() {
    return (
      <Section bg={"whites.0"} height={"fit-content"} overflow="hidden">
        <Box
          ml={r("2 ---> 3 -> 4 5 -> 6 7")}
          mr={r("2 ---> 3 -> 4 5 -> 6 7")}
          pt={r("5")}
          pb={r("5")}
        >
          <Features flexDirection={r("column ------> row")}>
            <FeatureBox
              borderWidth={"3px"}
              borderTopColor="transparent"
              borderBottomColor={r("greys.1 ------> transparent")}
              borderLeftColor="transparent"
              borderRightColor={r("transparent ------> greys.1")}
              borderStyle="solid"
              title={"targeting"}
              icon={targeting}
              pl={r("8px!important ------> unset")}
              text={
                "We are constantly adding new storefronts, each attracting a highly targeted userbase. By matching your products with the best storefronts, the people most interested in your products are the ones who see and demo them, resulting in better sales and conversion rates."
              }
            />
            <FeatureBox
              title={"Analytics"}
              icon={dashboard}
              text={
                "Track sales and commission in real-time via the dashboard, so you see how each storefront performs. By leveraging real-time data, you have the information you need to maximize sales, build brand awareness and scale your demodash campaigns to drive sales and adoption."
              }
            />
          </Features>
        </Box>
      </Section>
    );
  }
}
export default Solution;
