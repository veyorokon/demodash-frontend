import React from "react";
import {Flex, Section, Box, Text, Image} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";
import bromane from "assets/testimonials/bromane.jpg";

const TitleSection = styled(Flex)``;

const CardImage = styled(Image)``;
const Card = styled(Flex)`
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  }
`;
const CardText = styled(Box)`
  font-style: italic;
  letter-spacing: 0.5px;
`;

class Testimonials extends React.Component {
  render() {
    return (
      <Section bg={"greys.3"} height={"fit-content"} overflow="hidden">
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
            maxWidth={r("100% -----> 102rem")}
            h={r("auto -----> fit-content")}
            w={r("fit-content -----> auto")}
          >
            <CardImage width={r("7 ")} height={r("7 ")} src={bromane} />
            <Flex
              flexDirection="column"
              p={r("3 -------> 4")}
              w={r("7 -----> 8")}
              h={r("40rem -----> auto")}
            >
              <CardText
                maxWidth={r("unset -----> 85%")}
                fs={r("1.8rem ------> 1.9rem")}
                mb={3}
                lineHeight={1.6}
                fw={400}
              >
                “Simply put, demodash has doubled our sales volume. Product
                demos are by far our most effective marketing tool and demodash
                gives us the infrastructure to efficiently distribute them.”
              </CardText>
              <Text fs={r("1.8rem ------> 2rem")} fw={"bold"}>
                Vahid Eyorokon
              </Text>
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
