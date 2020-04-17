import React from "react";
import {Flex, Box, Section, Text, Image} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

import StoreFront from "assets/svg/storefront-colour.svg";
import AppUser from "assets/svg/app-user.svg";
import ShipPackage from "assets/svg/ship-package.svg";

import VertTabs, {TabPanel} from "./components/VertTabs";

const PanelTitle = styled(Box)``;

const PanelOne = () => (
  <TabPanel
    height={"100%"}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="space-around"
  >
    <Image h={"30rem"} src={StoreFront} />
    <PanelTitle justifyContent="center">
      <Text
        mt={3}
        mb={4}
        lineHeight={"1.5"}
        as="p"
        fw={300}
        fs={"2rem"}
        color="navys.2"
      >
        Discover storefonts in your industry. Leverage their expertise as your
        sales force.
      </Text>
    </PanelTitle>
  </TabPanel>
);

const PanelTwo = () => (
  <TabPanel
    height={"100%"}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="space-around"
  >
    <Image h={"30rem"} src={AppUser} />
    <PanelTitle justifyContent="center">
      <Text
        textAlign="center"
        mt={3}
        mb={4}
        lineHeight={"1.5"}
        as="p"
        fw={300}
        fs={"2rem"}
        color="navys.2"
      >
        Discover storefonts in your industry. Leverage their expertise as your
        sales force.
      </Text>
    </PanelTitle>
  </TabPanel>
);

const PanelThree = () => (
  <TabPanel
    height={"100%"}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="space-around"
  >
    <Image h={"30rem"} src={ShipPackage} />
    <PanelTitle justifyContent="center">
      <Text
        textAlign="center"
        mt={3}
        mb={4}
        lineHeight={"1.5"}
        as="p"
        fw={300}
        fs={"2rem"}
        color="navys.2"
      >
        Discover storefonts in your industry. Leverage their expertise as your
        sales force.
      </Text>
    </PanelTitle>
  </TabPanel>
);

class HowItWorks extends React.Component {
  render() {
    return (
      <Section
        height={r("65rem")}
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
            pl={5}
            pr={5}
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
              <PanelOne />
              <PanelTwo />
              <PanelThree />
            </VertTabs>
          </Flex>
        </Flex>
      </Section>
    );
  }
}

export default HowItWorks;
