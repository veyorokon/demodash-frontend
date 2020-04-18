import React from "react";
import {Flex, Section, ImageBox, Text} from "components";
import {responsive as r} from "lib";

import mobileMedia from "assets/images/generic-products.jpg";

class Solution extends React.Component {
  render() {
    return (
      <Section bg={"greys.3"} height={r(" 60rem")} overflow="hidden">
        <ImageBox
          backgroundSize={r("cover  ------> contain")}
          backgroundPosition={"bottom"}
          backgroundImage={`url(${mobileMedia})`}
          pt={r("5")}
        >
          <Flex
            p={r("1 2 ---> 3")}
            mb={r("1 ----> 2 -> 5")}
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              textAlign="center"
              lineHeight={"1.5"}
              as="h2"
              fw={r("600")}
              fs={r("2.8rem --> 3rem ---> 3.4rem")}
              color="navys.0"
              mb={2}
            >
              From demo to new user.
            </Text>
            <Text
              mt={3}
              mb={4}
              lineHeight={"1.5"}
              letterSpacing={"-0.5px"}
              as="p"
              fw={300}
              fs={"2rem"}
              color="navys.2"
              textAlign="center"
            >
              Scale your business from demo to dropshipping - on one platform.
            </Text>
          </Flex>
        </ImageBox>
      </Section>
    );
  }
}
export default Solution;
