import React from "react";
import {Flex, Section, Box, Text, Image} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

const TitleSection = styled(Flex)``;
const Card = styled(Flex)``;
const CardText = styled(Box)`
  font-style: italic;
  letter-spacing: 0.5px;
`;

class Testimonials extends React.Component {
  render() {
    return (
      <Section bg={"greys.3"} height={"fit-content"} overflow="hidden">
        <Box
          ml={r("2 ---> 3 -> 4 5 -> 6 7")}
          mr={r("2 ---> 3 -> 4 5 -> 6 7")}
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
              What our beta users say
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
              Our beta users are seeing the difference.
            </Text>
          </TitleSection>
          <Card
            flexDirection={r("column -----> row")}
            m="0 auto"
            br={2}
            bg={"whites.0"}
            maxWidth={"auto -----> 100rem"}
            h={r("auto -----> fit-content")}
            w={r("fit-content -----> auto")}
          >
            <Image w={7} h={7} bg={"greys.0"} />
            <Flex flexDirection="column" p={4} pt={4} w={r("7 -----> 8")}>
              <CardText
                maxWidth={r("unset -----> 85%")}
                fs={"1.8rem"}
                mb={3}
                lineHeight={1.6}
                fw={400}
              >
                “Our teams tell us they’re working together and solving problems
                much faster, because although they are spread across the globe,
                Slack makes it like you’re in the same room.”
              </CardText>
              <Text fw={"bold"}>Vahid Eyorokon</Text>
              <Text mt={1} fw={300}>
                founder, Bromane
              </Text>
            </Flex>
          </Card>
        </Box>
      </Section>
    );
  }
}
export default Testimonials;
