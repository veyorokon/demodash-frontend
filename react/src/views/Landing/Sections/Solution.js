import React from "react";
import {Flex, Section, ImageBox, Text, Title} from "components";
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
          pt={r("4 --> 5")}
        >
          <Flex
            p={r("0 1 --> 2")}
            mb={r("1 ----> 2 -> 5")}
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="center"
          >
            <Title
              textAlign="center"
              lineHeight={"1.5"}
              as="h2"
              fw={r("400 --> 600")}
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
        </ImageBox>
      </Section>
    );
  }
}

export default Solution;
