import React from "react";
import {Flex, Section, Box, Text, Image} from "components";
import {GridItemFlex, FlexGrid} from "./components";
import {responsive as r} from "lib";
import storefrontWithProduct from "assets/svg/storefront-withproduct.svg";

function DemoDelivery(props) {
  return (
    <Section bg={"whites.0"} height={"fit-content"} overflow="hidden">
      <Box
        ml={r("2 3 -----> 5 6 -> 7")}
        mr={r("2 3 -----> 5 6 -> 7")}
        p={r("2 ----> 4")}
        pt={r("5 -------->  6")}
        pb={r("5 -------->  6")}
      >
        <Flex
          justifyContent="flex-start"
          flexDirection="column"
          alignItems="center"
        >
          <FlexGrid
            gridColumnGap={"10%"}
            gridTemplateColumns={r("repeat(2,1fr)")}
            display={r("flex -----> grid")}
            flexDirection="column"
            w={r("100%")}
          >
            <GridItemFlex justifyContent="center" mb={r("4 -----> 0")}>
              <Text
                mb={2}
                mt={2}
                lineHeight={"1.18"}
                letterSpacing={"-.8px"}
                as="h1"
                fs={r("3rem ----> 3.8rem")}
                color="navys.0"
              >
                Ship your product demo
              </Text>
              <Text
                mt={3}
                mb={4}
                lineHeight={"1.3"}
                letterSpacing={"-.5px"}
                as="p"
                fw={300}
                fs={r("2rem --------> 2.2rem")}
                color="navys.2"
              >
                For each store you choose to work with, you ship enough product
                for them to demo on users at their location. Storefronts can
                then sell your product on their virtual demodash store - the
                commission you set keeps them motivated!
              </Text>
            </GridItemFlex>
            <GridItemFlex order={r("1 -----> 0")}>
              <Image
                m="auto"
                src={storefrontWithProduct}
                maxWidth={"100%"}
                w={"40rem"}
              />
            </GridItemFlex>
          </FlexGrid>
        </Flex>
      </Box>
    </Section>
  );
}
export default DemoDelivery;
