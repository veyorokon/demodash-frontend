import React from "react";
import {Flex, Box, Text} from "components/core";
import {appear} from "components/core/animation";
import styled from "styled-components";

const AnimatedText = styled(Text)`
  animation-name: ${appear};
  animation-duration: 0.6s;
  -webkit-animation-duration: 400ms;
  animation-duration: 400ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;
const AdaptiveText = styled(Text)`
  grid-column: 1;
  grid-row: 1;
  padding-right: calc(3rem + (12 * (100vw - 48rem) / 672));
  font-size: calc(2rem + (8 * (100vw - 48rem) / 672));
  line-height: calc(3.2rem + (8 * (100vw - 48rem) / 672));
  margin-bottom: 2.4rem;
`;

const CallOutGrid = styled(Box)`
  padding: 0rem 0 6rem 0;
  display: grid;
  position: relative;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  min-height: 100%;
`;

const COContent = styled(AnimatedText)`
  animation-delay: 0.1s;
`;

const COTitle = styled(Text)`
  margin: 0;
  padding-bottom: 3.6rem;
  line-height: calc(3rem + (50 * (100vw - 22.5rem) / 1080));
  font-weight: bold;
`;

const COBody = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-column-gap: 1.5rem;
`;
const COLeftDesktop = styled(CallOutGrid)`
  padding: 8rem 0;
  grid-template-columns: 1fr 1fr;
`;

const COLeftMobile = styled(CallOutGrid)`
  padding: 0 0 8rem 0;
  grid-template-columns: 1fr;
  position: relative;
`;
//${display}

const LeftCOLeftMobileContainer = styled(Box)`
  padding-bottom: 0;
  padding-left: calc(3rem + (72 * (100vw - 48rem) / 672));
  padding-right: calc(3rem + (72 * (100vw - 48rem) / 672));
  height: auto;
`;

const LeftCOLeftDesktopContainer = styled(Box)`
  padding-bottom: 0;
  padding-left: calc(1rem + (72 * (100vw - 48rem) / 672));
  padding-right: calc(1rem + (72 * (100vw - 48rem) / 672));
  height: auto;
`;

const LeftCORightContainerDesktop = styled(Flex)`
  grid-column: 2;
  display: flex;
  margin-top: 8rem;
  margin-bottom: 0;
  padding: 8rem calc(1.5rem + (36 * (100vw - 48rem) / 672)) 5rem
    calc(2.5rem + (80 * (100vw - 48rem) / 672));
`;

const COMarkdown = styled(AdaptiveText)``;
const COButtonContainer = styled(Box)`
  grid-column: 1;
  grid-row: 2;
  width: 13.25rem;
  border: 0;
  cursor: pointer;
  display: inline-block;
  text-aligh: center;
`;

const LeftCORightContainerMobile = Flex;

export default class LeftCallOut extends React.Component {
  render() {
    const {title, children, desktopMedia, mobileMedia} = this.props;
    const textContainerWidth = [
      "100%",
      "100%",
      "100%",
      "calc(27.75rem + (348 * (100vw - 48rem) / 672))"
    ];
    const contentPadding = ["4rem 3rem", "4rem 3rem", "4rem 3rem", "unset"];

    const desktopDisplay = ["none", "none", "none", "grid"];
    const mobileDisplay = ["grid", "grid", "grid", "none"];

    const mediaMobileContainerPosition = [
      "absolute",
      "absolute",
      "absolute",
      "unset"
    ];
    const mediaMobileContainerBottom = ["15%", "10%", "10%", "unset"];

    const textContainerPadding = [
      "0 0 calc(10rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "0 0 calc(10rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "0 0 calc(10rem + (135 * (100vw - 22.5rem) / 408)) 0",
      `8rem calc(6.75rem + (72 * (100vw - 48rem) / 672)) 8rem
      calc(2.4rem + (36 * (100vw - 48rem) / 672))`
    ];
    const textContainerMargin = [
      "0 0 calc(5rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "0 0 calc(5rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "0 0 calc(5rem + (135 * (100vw - 22.5rem) / 408)) 0",
      "unset"
    ];
    const titleFontSize = [
      "calc(2rem + (56 * (100vw - 22.5rem) / 1080))",
      "calc(2rem + (56 * (100vw - 22.5rem) / 1080))",
      "calc(2rem + (56 * (100vw - 22.5rem) / 1080))",
      "calc(1rem + (56 * (100vw - 25.5rem) / 1080))",
      "calc(1rem + (56 * (100vw - 25.5rem) / 1080))",
      "calc(0.5rem + (56 * (100vw - 35.5rem) / 1080))"
    ];
    return (
      <React.Fragment>
        <COLeftDesktop display={desktopDisplay}>
          <LeftCOLeftDesktopContainer>
            {desktopMedia}
          </LeftCOLeftDesktopContainer>
          <LeftCORightContainerDesktop
            width={textContainerWidth}
            background="white.0"
          >
            <COContent padding={contentPadding}>
              <COTitle color={"black.0"} fontSize={titleFontSize}>
                {title}
              </COTitle>
              <COBody>
                <COMarkdown color={"black.0"}>{children[0]}</COMarkdown>
                <COButtonContainer>{children[1]}</COButtonContainer>
              </COBody>
            </COContent>
          </LeftCORightContainerDesktop>
        </COLeftDesktop>

        <COLeftMobile display={mobileDisplay}>
          <LeftCORightContainerMobile
            padding={textContainerPadding}
            margin={textContainerMargin}
            background="white.0"
          >
            <COContent padding={contentPadding}>
              <COTitle color={"black.0"} fontSize={titleFontSize}>
                {title}
              </COTitle>
              <COBody>
                <COMarkdown color={"black.0"}>{children[0]}</COMarkdown>
                <COButtonContainer>{children[1]}</COButtonContainer>
              </COBody>
            </COContent>
          </LeftCORightContainerMobile>
          <LeftCOLeftMobileContainer
            position={mediaMobileContainerPosition}
            bottom={mediaMobileContainerBottom}
          >
            {mobileMedia}
          </LeftCOLeftMobileContainer>
        </COLeftMobile>
      </React.Fragment>
    );
  }
}
