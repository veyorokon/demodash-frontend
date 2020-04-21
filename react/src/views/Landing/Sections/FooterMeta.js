import React from "react";
import {Flex, Section, Box, Text} from "components";
import {responsive as r} from "lib";

class FooterMeta extends React.Component {
  render() {
    return (
      <Section bg={"whites.1"} height={"fit-content"} overflow="hidden">
        <Box
          pt={r("4 ---------> 5")}
          pb={r("4")}
          ml={r("2 ---> 3 -> 4 5")}
          mr={r("2 ---> 3 -> 4 5")}
        >
          <Flex
            justifyContent="flex-start"
            flexDirection="row"
            alignItems="center"
          >
            <Text
              lineHeight={"1.5"}
              letterSpacing={"-.2px"}
              as="p"
              fw={300}
              mr={3}
              fs={"1.2rem"}
              color="blacks.0"
              textAlign={r("center ------> left")}
              maxWidth="80rem"
            >
              Privacy & Terms
            </Text>
            <Text
              lineHeight={"1.5"}
              letterSpacing={"-.2px"}
              as="p"
              fw={300}
              mr={3}
              fs={"1.2rem"}
              color="blacks.0"
              textAlign={r("center ------> left")}
              maxWidth="80rem"
            >
              Contact Us
            </Text>
          </Flex>
        </Box>
      </Section>
    );
  }
}
export default FooterMeta;
