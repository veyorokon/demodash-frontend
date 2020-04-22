import React from "react";
import {Flex, Section, Box, Text, Grid, Image, Link} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";
import logo from "assets/svg/logo.svg";

const Logo = styled(Image)``;

const GridItemFlex = styled(Flex)`
  flex: 1 1 auto;
  flex-direction: column;
`;

const GridItem = props => (
  <GridItemFlex>
    <Text
      color={"navys.0"}
      fs={"1.4rem"}
      textTransform={"uppercase"}
      m="unset"
      p={2}
      pl="unset"
      pr="unset"
      fw={500}
    >
      {props.title}
    </Text>
    {props.links.map((link, index) => (
      <Text key={index} color={"greys.0"} m="unset" p={2} pl="unset" pr="unset">
        <Link href={`${link.link}`}>{link.text}</Link>
      </Text>
    ))}
  </GridItemFlex>
);

const productLinks = [{text: "text", link: "/somelink"}];

export default class FooterNav extends React.Component {
  render() {
    return (
      <Section
        border={"1px solid #eee"}
        borderLeft="unset"
        borderRight="unset"
        borderBottom="unset"
        bg={"whites.0"}
        height={"fit-content"}
        overflow="hidden"
      >
        <Box
          ml={r("2 ---> 3 -> 4 5 6 ")}
          mr={r("2 ---> 3 -> 4 5 6 ")}
          pt={r("5 -------> 6")}
          pb={r("5 -------> 6")}
        >
          <Flex
            flexDirection={r("column -----> row")}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Logo
              mb={4}
              mr={4}
              src={logo}
              w={r("6rem -----> 7rem")}
              h={r("6rem -----> 7rem")}
            />
            <Grid
              gridTemplateColumns={r("repeat(2,1fr) ----> repeat(4,1fr)")}
              w={r("100% -----> 65%")}
            >
              <GridItem title="title1" links={productLinks} {...this.props} />
            </Grid>
          </Flex>
        </Box>
      </Section>
    );
  }
}
