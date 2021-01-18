import React from "react";
import {Flex, Section, Box, Text, Image} from "components";
import Testimonial from "./components";
import {responsive as r} from "lib";
import styled from "styled-components";
import bromane from "assets/testimonials/bromane.jpg";
import cherrybomb from "assets/testimonials/cherrybomb.jpg";

const TitleSection = styled(Flex)``;

const CardImage = styled(Image)``;
const CardContainer = styled(Flex)`
  cursor: pointer;
`;
const CardText = styled(Box)`
  font-style: italic;
  letter-spacing: 0.5px;
`;

const Card = props => (
  <CardContainer
    display={r("block -----> flex")}
    flexDirection={r("column -----> row")}
    m="2.1rem auto"
    br={2}
    bg={"whites.0"}
    maxWidth={r("100% -----> 102rem")}
    h={r("auto -----> fit-content")}
    w={r("fit-content -----> auto")}
    {...props}
  >
    <CardImage
      width={r("25rem 28rem 30rem ---> 7")}
      maxWidth="100%"
      height={r("auto 7")}
      src={props.image}
    />
    <Flex
      flexDirection="column"
      p={r("3 4 ----> 3 --> 4")}
      w={r("25rem 28rem 30rem ---> 8")}
      h={r("40rem -----> auto")}
      maxWidth={r("100% -----> 85%")}
    >
      <CardText
        maxWidth={r("unset -----> 85%")}
        fs={r("1.8rem ------> 1.9rem")}
        mb={3}
        lineHeight={1.5}
        fw={400}
      >
        {props.text}
      </CardText>
      <Text fs={r("1.8rem ------> 2rem")} fw={"bold"}>
        {props.person}
      </Text>
      <Text mt={1} fw={300}>
        {props.company}
      </Text>
    </Flex>
  </CardContainer>
);

class Testimonials extends React.Component {
  render() {
    return (
      <Section bg={"greys.4"} height={"fit-content"} overflow="hidden">
        <Box
          pl={r("2 ---> 3 -> 4  -> 5 6 7")}
          pr={r("2 ---> 3 -> 4  -> 5 6 7")}
          pt={r("5 ---------> 6")}
          pb={r("5 ---------> 6")}
        >
          <TitleSection
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="center"
            mb={5}
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
              What our alpha users say
            </Text>
            <Text
              mt={2}
              lineHeight={"1.5"}
              letterSpacing={"-.2px"}
              as="p"
              fw={300}
              fs={r("2rem -----> 2.2rem")}
              color="navys.2"
              textAlign="center"
              maxWidth="80rem"
            >
              Our alpha users are seeing the difference that demos at scale can
              make.
            </Text>
          </TitleSection>
          <Testimonial h={"min-content"}>
            <Card
              image={bromane}
              text={`“The scope of our demo-based marketing has incresased by an order of magnitude. Instead of sending demos/samples to individual users, they're sent to barbershops and used on dozens.”`}
              person={"Vahid B. Eyorokon"}
              company={"founder, Bromane"}
            />
            <Card
              image={cherrybomb}
              text={`“Product demos made a massive difference. We've seen our sales jump simply because users had a chance to try and see our soaps in person before buying them.”`}
              person={"Natasha Miller"}
              company={"founder, Cherrybomb Soap"}
            />
          </Testimonial>
        </Box>
      </Section>
    );
  }
}
export default Testimonials;
