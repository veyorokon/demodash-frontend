import React from "react";
import {Flex, Section, Box, Text, Link} from "components";
import {CallToAction as CTAButton} from "views/_components";
import {responsive as r} from "lib";

class CallToAction extends React.Component {
  render() {
    return (
      <Section bg={"navys.2"} height={"fit-content"} overflow="hidden">
        <Box
          ml={r("2 ---> 3 -> 4 5 6 -> 7")}
          mr={r("2 ---> 3 -> 4 5 6 -> 7")}
          p={r("2 ----> 4")}
          mt={r("5")}
          mb={r("5")}
        >
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              textAlign="center"
              lineHeight={"1.5"}
              as="h2"
              fw={r("600")}
              fs={r("3rem --> 3.4rem ---> 4.4rem")}
              color="whites.0"
              mb={4}
              letterSpacing={"-.8px"}
            >
              Get started today
            </Text>
            <Link w={r("100% -----> 30rem")} href="/link">
              <CTAButton
                w={r("100% -----> 30rem")}
                fs={"1.4rem"}
                fw={600}
                bg={"whites.0"}
                br={4}
                color="navys.2"
              >
                Create Account
              </CTAButton>
            </Link>
          </Flex>
        </Box>
      </Section>
    );
  }
}
export default CallToAction;
