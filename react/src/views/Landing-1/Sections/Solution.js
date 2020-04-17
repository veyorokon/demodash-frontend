import React from "react";
import {Flex, Section, Text} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

import VertTabs, {TabPanel} from "./components/VertTabs";

const Title = styled(Text)`
  text-shadow: 0 0 black;
  letter-spacing: -0.7px;
`;

const PanelTitle = styled(Flex)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

class Solution extends React.Component {
  render() {
    return (
      <Section
        height={r("80rem")}
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
          <Flex mb={5} ml={5} mr={5} flexDirection="column" alignItems="center">
            <Title
              mt={2}
              textAlign="center"
              lineHeight={"1.5"}
              as="h2"
              fw={600}
              fs={"3.6rem"}
              color="navys.0"
            >
              Demo to dropshipping in one place.
            </Title>
            <Text
              mt={3}
              mb={4}
              lineHeight={"1.5"}
              as="p"
              fw={300}
              fs={"2rem"}
              color="navys.2"
              textAlign="center"
            >
              Ship demos to storefronts, process payments and commission, and
              ship purchases to customers.
            </Text>
          </Flex>
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
              <TabPanel>
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
                    A complete customer experience, on one platform.
                  </Text>
                </PanelTitle>
              </TabPanel>
              <TabPanel>
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
                    Leverage small businesses as a professional sales force.
                  </Text>
                </PanelTitle>
              </TabPanel>
            </VertTabs>
          </Flex>
        </Flex>
      </Section>
    );
  }
}

export default Solution;
