import React from "react";
import {Flex, Section, ImageBox, Text} from "components";
import {responsive as r} from "lib";

// import mobileMedia from "assets/images/generic-products.jpg";
//height={r("48rem ----> 60rem")}
class Solution extends React.Component {
  render() {
    return (
      <Section bg={"greys.3"} height={"fit-content"} overflow="hidden">
        <ImageBox
          // backgroundSize={r("cover  ------> contain")}
          // backgroundPosition={"bottom"}
          // backgroundImage={`url(${mobileMedia})`}
          pt={r("4 ----> 5")}
        >
          <Flex
            p={r("1 2 ---> 3")}
            pl={r("1 2 ---> 4 5 -> 6 7")}
            pr={r("1 2 ---> 4 5 -> 6 7")}
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
              From demo to user.
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
              Scale your business from demo to dropshipping and handle
              everything in between like payment processing and commission - on
              one platform.
            </Text>
          </Flex>
        </ImageBox>
      </Section>
    );
  }
}
export default Solution;
