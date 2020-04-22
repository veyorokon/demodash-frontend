import React from "react";
import {Flex, Section, Box, Text, Link} from "components";
import {responsive as r} from "lib";

const MetaTag = props => (
  <Text
    fs={"1.2rem"}
    fw={500}
    color={"greys.0"}
    m="unset"
    mr={3}
    p={2}
    pl="unset"
    pr="unset"
  >
    <Link href={`${props.link}`}>{props.text}</Link>
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
          pt={r("4")}
          pb={r("4")}
          ml={r("2 ---> 3 -> 4 5")}
          mr={r("2 ---> 3 -> 4 5")}
        >
          <Flex
            justifyContent={responsiveJustify}
            flexDirection="row"
            alignItems="center"
          >
            <MetaTag text={"Privacy & Terms"} link={"/legal"} />
            <MetaTag text={"Contact Us"} link={"/"} />
          </Flex>
        </Box>
      </Section>
    );
  }
}
export default FooterMeta;
