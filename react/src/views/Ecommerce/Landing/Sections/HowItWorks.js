import React from "react";
import {Flex, Box, Section, Text, Image, FeatureLink} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

import StoreFront from "assets/svg/storefront-colour.svg";
import AppUser from "assets/svg/app-user2.svg";
import ShipPackage from "assets/svg/ship-package.svg";

import VertTabs, {TabPanel} from "./components/VertTabs";

const PanelTitle = styled(Box)``;
const PanelBody = styled(Box)``;

const Panel = props => (
  <TabPanel
    height={"100%"}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="space-around"
  >
    <PanelTitle justifyContent="center">
      <Text
        mt={r("1 2 ----> 3")}
        mb={r("1 2 ----> 3")}
        lineHeight={"1.5"}
        as="p"
        fw={400}
        fs={r("2rem --> 2.6rem")}
        color="navys.0"
        textAlign="center"
      >
        {props.title}
      </Text>
    </PanelTitle>
    <Image
      mt={"-5rem"}
      maxWidth={"100%"}
      h={r("16rem 20rem  22rem --> 30rem")}
      src={props.svg}
    />
    <PanelBody mt={"-5rem"}>
      <Text
        lineHeight={"1.5"}
        as="p"
        fw={400}
        fs={r("1.8rem -> 2rem")}
        color="navys.2"
        textAlign={r("center")}
        letterSpacing="-0.5px"
        maxWidth="60rem"
        mb={props.children && 3}
      >
        {props.text}
      </Text>
      {props.children && props.children}
    </PanelBody>
  </TabPanel>
);

class HowItWorks extends React.Component {
  render() {
    return (
      <Section height={r("65rem")} minHeight="fit-content" overflow="hidden">
        <Flex bg="greys.3" flexDirection="column" height="100%" width="100%">
          <Flex
            flexDirection="column"
            bg="whites.0"
            pl={r("2 ----> 3 4 5 6 7 -> 8")}
            pr={r("2 ----> 3 4 5 6 7 -> 8")}
            m={0}
            width="100%"
            height="100%"
          >
            <VertTabs
              tabHeaders={["Demo", "Purchase", "Ship"]}
              ml={r("0 3")}
              mr={r("0 3")}
              height="100%"
            >
              <Panel
                title={"Ship demos to storefronts"}
                text={
                  "Discover storefonts in your industry to maximize targeting and sales conversion. Leverage their expertise as your sales force."
                }
                svg={StoreFront}
              >
                <FeatureLink
                  color={"oranges.0"}
                  fw={400}
                  href="/ecommerce/how-it-works"
                >
                  Learn more about how demodash works
                </FeatureLink>
              </Panel>
              <Panel
                title={"Process payments and commission"}
                text={
                  "You set product prices and commission rates to keep storefronts motivated. Sales happen at the storefront on demodash."
                }
                svg={AppUser}
              >
                <FeatureLink
                  color={"oranges.0"}
                  fw={400}
                  href="/ecommerce/how-it-works#billing"
                >
                  Learn more about fees and commission
                </FeatureLink>
              </Panel>
              <Panel
                title={"Ship purchases to customers"}
                text={
                  "You'll get notified of any new sales. When a sale goes through, you just ship the purchased products directly to the end user!"
                }
                svg={ShipPackage}
              />
            </VertTabs>
          </Flex>
        </Flex>
      </Section>
    );
  }
}

export default HowItWorks;
