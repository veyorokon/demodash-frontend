import React from "react";
import {Flex, Section, Box, Image, Text, FeatureLink} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

import influencer from "assets/svg/influencer.svg";
import storefront from "assets/svg/storefront-withproduct.svg";

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
  <Flex
    flexDirection="column"
    alignItems="flex-start"
    p={r("2 -----> 3 4 -> 5")}
    pt="0 !important"
    mb={r("3 ----> 5 -> 0")}
    {...props}
  >
    <Image
      maxWidth="100%"
      mb={3}
      h={r("14rem ----> 18rem ---> 20rem")}
      src={props.icon}
    />
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
  </Flex>
);

class FeatureSection extends React.Component {
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
              title={"Storefront demos"}
              icon={storefront}
              pl={r("8px!important ------> unset")}
              pb={r("5 -------> initial")}
              text={
                "Get your product demos into storefronts, each attracting a highly targeted userbase."
              }
            >
              <FeatureLink
                ml={0}
                color={"oranges.0"}
                fw={400}
                href="/ecommerce/find-storefront"
              >
                Learn more about storefront demos.
              </FeatureLink>
            </FeatureBox>
            <FeatureBox
              title={"Influencer demos"}
              icon={influencer}
              text={
                "Distribute your product demos to influencers for a massive boost in brand visibility."
              }
            >
              <FeatureLink
                ml={0}
                color={"oranges.0"}
                fw={400}
                href="/ecommerce/how-it-works"
              >
                Learn more about influencer demos.
              </FeatureLink>
            </FeatureBox>
          </Features>
        </Box>
      </Section>
    );
  }
}
export default FeatureSection;
