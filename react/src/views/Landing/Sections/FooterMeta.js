import React from "react";
import {Flex, Section, Box, Text} from "components";
import {responsive as r} from "lib";

const MetaTag = props => (
  <Text
    cursor={"pointer"}
    lineHeight={"1.5"}
    letterSpacing={"-.2px"}
    as="p"
    fw={500}
    mr={3}
    fs={"1.2rem"}
    color="blacks.0"
    textAlign={r("center ------> left")}
  >
    {props.text}
  </Text>
);

let responsiveJustify = r("center ----> flex-start");
responsiveJustify = responsiveJustify.map(function(item) {
  return item === "flex" ? "flex-start" : item;
});

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
            justifyContent={responsiveJustify}
            flexDirection="row"
            alignItems="center"
          >
            <MetaTag text={"Privacy & Terms"} />
            <MetaTag text={"Contact Us"} />
          </Flex>
        </Box>
      </Section>
    );
  }
}
export default FooterMeta;
