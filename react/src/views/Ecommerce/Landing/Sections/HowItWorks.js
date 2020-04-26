import React from "react";
import {Flex, Box, Section, Text, Image, Link} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

import StoreFront from "assets/svg/storefront-colour.svg";
import AppUser from "assets/svg/app-user2.svg";
import ShipPackage from "assets/svg/ship-package.svg";

import VertTabs, {TabPanel} from "./components/VertTabs";

const PanelTitle = styled(Box)``;
const PanelBody = styled(Box)``;

const FeatureLinkText = styled(Link)`
  position: relative;
  cursor: pointer;
  line-height: 1.5;
  overflow: hidden;

  ::before {
    left: -2px;
    width: 0;
    content: "";
    position: absolute;
    bottom: -1px;
    border: 1px solid currentColor;
    transition: width 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  ::after {
    content: "";
    width: 1.8rem;
    height: 1.2rem;
    display: inline-block;
    margin-left: 0.5em;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%206a.5.5%200%200%200%200%201V6zM12.854.646a.5.5%200%200%200-.708.708l.708-.708zM18%206.5l.354.354a.5.5%200%200%200%200-.708L18%206.5zm-5.854%205.146a.5.5%200%200%200%20.708.708l-.708-.708zM1%207h16.5V6H1v1zm16.646-.854l-5.5%205.5.708.708%205.5-5.5-.708-.708zm-5.5-4.792l2.75%202.75.708-.708-2.75-2.75-.708.708zm2.75%202.75l2.75%202.75.708-.708-2.75-2.75-.708.708z%22%20fill%3D%22%231264A3%22%2F%3E%3C%2Fsvg%3E");
  }
  &:hover {
    ::before {
      width: 100%;
    }
  }
`;

const FeatureLink = props => (
  <Flex
    margin={"auto"}
    width="fit-content"
    justifyContent="center"
    height={"2.5rem"}
    {...props}
  >
    <FeatureLinkText {...props}>{props.children}</FeatureLinkText>
  </Flex>
);

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
                  color={"navys.1"}
                  fw={400}
                  href="/ecommerce/how-it-works"
                >
                  Learn More
                </FeatureLink>
              </Panel>
              <Panel
                title={"Process payments and commission"}
                text={
                  "You set product prices and commission rates to keep storefronts motivated. Sales happen at the storefront on demodash."
                }
                svg={AppUser}
              />
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
