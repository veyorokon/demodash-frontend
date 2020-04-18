import React from "react";
import {Flex, Box, Section, Text, Image} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

import StoreFront from "assets/svg/storefront-colour.svg";
import AppUser from "assets/svg/app-user2.svg";
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
        fs={r("2rem --> 2.6rem")}
        color="navys.0"
        textAlign="center"
      >
        {props.title}
      </Text>
    </PanelTitle>
    <Image
      maxWidth={"100%"}
      h={r("20rem 24rem  30rem --> 38rem")}
      src={props.svg}
    />
    <PanelText justifyContent="center">
      <Text
        mt={3}
        mb={4}
        lineHeight={"1.5"}
        as="p"
        fw={300}
        fs={r("1.8rem -> 2rem")}
        color="navys.2"
        textAlign={r("center")}
        letterSpacing="-0.5px"
      >
        {props.text}
      </Text>
    </PanelText>
  </TabPanel>
);

class HowItWorks extends React.Component {
  render() {
    return (
      <Section
        height={r("60rem 70rem -> 80rem")}
        minHeight="fit-content"
        background={r("grey.1")}
        overflow="hidden"
      >
        <Flex
          bg="greys.3"
          flexDirection="column"
          height="100%"
          width="100%"
          // pb={r("4 ----> 5")}
          // pl={r("0 ----> 4 -> 5 6")}
          // pr={r("0 ----> 4 -> 5 6")}
        >
          <Flex
            // br={2}
            flexDirection="column"
            bg="whites.0"
            p={3}
            pl={r("2 -----> 3 4 6 7")}
            pr={r("2 -----> 3 4 6 7")}
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
                  "Discover storefonts in your industry. Leverage their expertise as your sales force."
                }
                svg={StoreFront}
              />
              <Panel
                title={"Process payments and commission"}
                text={
                  "When a sale is made, payments are processed and commission is automatically paid to the store."
                }
                svg={AppUser}
              />
              <Panel
                title={"Ship purchases to customers"}
                text={
                  "You'll get notified of any new sales. Then, just ship purchased products directly to the end user!"
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
