import React from "react";
import {Flex, Section, Box, Image, Text, FeatureLink} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

import analytics from "assets/svg/analytics.svg";
import targeting from "assets/svg/targeting.svg";

const Features = styled(Flex)`
  & > :first-child {
    padding-left: unset;
  }
  & > :last-child {
    padding-right: unset;
    margin-bottom: unset;
  }
`;

const FeatureTitle = styled(Text)``;

const FeatureBox = props => (
  <Box
    p={r("2 -----> 3 4 -> 5")}
    pt="0 !important"
    mb={r("3 ----> 5 -> 0")}
    {...props}
  >
    <Image mb={3} h={r("14rem ----> 18rem ---> 20rem")} src={props.icon} />
    <FeatureTitle
      mt={3}
      mb={4}
      lineHeight={"1.5"}
      as="h2"
      fw={500}
      fs={r("2rem 2.6rem")}
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
    {props.children}
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
              title={"Targeting"}
              icon={targeting}
              pl={r("8px!important ------> unset")}
              pb={r("5 -------> initial")}
              text={
                "Influencers are always joining demodash, and each has a highly targeted following. By matching your products with the best influencers, the people most interested in your products are the ones who see the demo, resulting in better sales and conversion rates."
              }
            >
              <FeatureLink
                ml={0}
                color={"oranges.0"}
                fw={400}
                href="/ecommerce/how-it-works#targeting"
              >
                The importance of targeting
              </FeatureLink>
            </FeatureBox>
            <FeatureBox
              title={"Analytics"}
              icon={analytics}
              text={
                "Track sales and commission in real-time via the dashboard, so you see how each storefront performs. By leveraging real-time data, you have the information you need to maximize sales, build brand awareness and scale your demodash campaigns to drive sales and adoption."
              }
            >
              <FeatureLink
                ml={0}
                color={"oranges.0"}
                fw={400}
                href="/ecommerce/how-it-works"
              >
                Learn more about demodash
              </FeatureLink>
            </FeatureBox>
          </Features>
        </Box>
      </Section>
    );
  }
}
export default Solution;
