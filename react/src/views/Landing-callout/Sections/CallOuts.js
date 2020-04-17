import React from "react";
import {Flex, Section, Text, Button, LeftCallOut, Image} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

import mobileMedia from "assets/images/product-shelf.jpeg";
import desktopMedia from "assets/images/product-shelf.jpeg";
const MobileImage = <Image src={`${mobileMedia}`} />;

const Title = styled(Text)`
  text-shadow: 0 0 black;
  letter-spacing: -0.7px;
`;

class Solution extends React.Component {
  render() {
    return (
      <Section
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
          <Flex ml={5} mr={5} flexDirection="column" alignItems="center">
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

          <LeftCallOut
            title={"How long will it last?"}
            mobileMedia={MobileImage}
            desktopMedia={MobileImage}
          >
            One bottle lasts one month and an application lasts all day. It
            won't sweat out with rigorous exercise and is rain resistant so it
            won't streak. We designed our formula to wash out with shampoo and
            water.
            <Button color="black.0" bg="yellow.0">
              <Text pt="5px">buy now</Text>
            </Button>
          </LeftCallOut>
        </Flex>
      </Section>
    );
  }
}

export default Solution;
