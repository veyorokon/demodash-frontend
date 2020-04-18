import React from "react";
import {Flex, Box, Section, Text, Image} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

import StoreFront from "assets/svg/storefront-colour.svg";
import AppUser from "assets/svg/app-user.svg";
import ShipPackage from "assets/svg/ship-package.svg";

import VertTabs, {TabPanel} from "./components/VertTabs";

const PanelTitle = styled(Box)``;
const PanelText = styled(Box)``;

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
        mt={3}
        mb={4}
        lineHeight={"1.5"}
        as="p"
        fw={300}
        fs={"2rem"}
        color="navys.0"
      >
        {props.title}
      </Text>
    </PanelTitle>
    <Image h={"30rem"} src={props.svg} />
    <PanelText justifyContent="center">
      <Text
        mt={3}
        mb={4}
        lineHeight={"1.5"}
        as="p"
        fw={300}
        fs={"2rem"}
        color="navys.0"
      >
        {props.text}
      </Text>
    </PanelText>
  </TabPanel>
);

// Ship demos to storefronts, process payments and commission, and ship purchases to customers.

class HowItWorks extends React.Component {
  render() {
    return (
      <Section
        height={r("75rem")}
        minHeight="fit-content"
        background={r("grey.1")}
        overflow="hidden"
      >
        <Flex
          bg="greys.3"
          flexDirection="column"
          height="100%"
          width="100%"
          pt={5}
          pb={5}
        >
          <Flex
            flexDirection="column"
            bg="whites.0"
            p={3}
            pl={r("2 -----> 5")}
            pr={r("2 -----> 5")}
            m={0}
            width="100%"
            height="100%"
          >
            <VertTabs
              tabHeaders={["Demo", "Purchase", "Ship"]}
              ml={3}
              mr={3}
              height="100%"
            >
              <Panel
                title={"Ship demos to storefronts"}
                text={
                  "Discover storefonts in your industry. Leverage their expertise as your sales force."
                }
                svg={StoreFront}
              />
              <Panel
                title={"Process payments and commission"}
                text={
                  "Discover storefonts in your industry. Leverage their expertise as your sales force."
                }
                svg={AppUser}
              />
              <Panel
                title={"Ship purchases to customers"}
                text={
                  "Discover storefonts in your industry. Leverage their expertise as your sales force."
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
