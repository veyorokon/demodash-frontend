import React from "react";
import {Flex, Section, Box, Text} from "components";
import {responsive as r} from "lib";

class Solution extends React.Component {
  render() {
    return (
      <Section bg={"whites.0"} height={"fit-content"} overflow="hidden">
        <Box
          ml={r("2 3 -----> 5 6 -> 7")}
          mr={r("2 3 -----> 5 6 -> 7")}
          p={r("2 ----> 4")}
          pt={r("5")}
          pb={r("5")}
        >
          <Flex
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              textAlign="center"
              lineHeight={"1.5"}
              as="h2"
              fw={r("600")}
              fs={r("3rem --> 3.4rem ---> 4.4rem")}
              color="navys.0"
              mb={2}
              letterSpacing={"-.8px"}
            >
              Demos are experiences that scale
            </Text>
            <Text
              mt={3}
              lineHeight={"1.5"}
              letterSpacing={"-.2px"}
              as="p"
              fw={400}
              fs={r("2rem -----> 2.2rem")}
              color="navys.2"
              textAlign="center"
              maxWidth="80rem"
            >
              Efficiently distribute product demos where they can be seen and
              demoed the most.
            </Text>
          </Flex>
        </Box>
      </Section>
    );
  }
}
export default Solution;
