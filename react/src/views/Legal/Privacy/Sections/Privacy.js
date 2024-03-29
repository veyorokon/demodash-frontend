import React from "react";
import {Flex, Section, Box, Text} from "components";
import {responsive as r} from "lib";
import styled from "styled-components";

const SubTitleWrapper = styled(Text)``;

const SubTitle = props => (
  <SubTitleWrapper
    alignSelf="flex-start"
    mt={5}
    mb={4}
    fs={r("2rem -----> 2.2rem")}
    color="navys.1"
  >
    {props.children}
  </SubTitleWrapper>
);

const TextBlock = props => (
  <Text fs={r("1.4rem  -----> 1.6rem")} lineHeight={"1.5"} pt="5px">
    {props.children}
  </Text>
);

class Privacy extends React.Component {
  render() {
    return (
      <Section bg={"whites.0"} height={"fit-content"} overflow="hidden">
        <Box
          ml={r("2 ---> 3 -> 4 5 6 -> 7")}
          mr={r("2 ---> 3 -> 4 5 6 -> 7")}
          pt={r("6")}
          pb={r("6")}
        >
          <Flex
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="center"
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
              Privacy Policy
            </Text>
            <Text
              mt={3}
              mb={5}
              lineHeight={"1.5"}
              letterSpacing={"-.2px"}
              as="p"
              fw={300}
              fs={r("2rem -----> 2.2rem")}
              color="navys.1"
              textAlign="center"
              maxWidth="80rem"
            >
              Your privacy is critically important to us.
            </Text>
            <Text mb={5}>
              demodash.com
              <br />
              8412 Paul Drive, WEST CHESTER <br />
              45069 - OH , United States
              <br />
            </Text>
            <TextBlock>
              It is demodash.com's policy to respect your privacy regarding any
              information we may collect while operating our website. This
              Privacy Policy applies to{" "}
              <a href="https://demodash.com">https://demodash.com</a>{" "}
              (hereinafter, "our", "us", "we", or "https://demodash.com"). We
              respect your privacy and are committed to protecting personally
              identifiable information you may provide us through the Website.
              We have adopted this privacy policy ("Privacy Policy") to explain
              what information may be collected on our Website, how we use this
              information, and under what circumstances we may disclose the
              information to third parties. This Privacy Policy applies only to
              information we collect through the Website and does not apply to
              our collection of information from other sources. These terms are
              subject to change at our discretion.
            </TextBlock>
            <TextBlock>
              This Privacy Policy, together with the Terms and conditions posted
              on our Website, set forth the general rules and policies governing
              your use of our Website. Depending on your activities when
              visiting our Website, you may be required to agree to additional
              terms and conditions.
            </TextBlock>
            <SubTitle>Website Visitors</SubTitle>
            <TextBlock>
              Like most website operators, demodash.com collects
              non-personally-identifying information of the sort that web
              browsers and servers typically make available, such as the browser
              type, language preference, referring site, and the date and time
              of each visitor request. demodash.com's purpose in collecting
              non-personally identifying information is to better understand how
              demodash.com's visitors use its website. From time to time,
              demodash.com may release non-personally-identifying information in
              the aggregate, e.g., by publishing a report on trends in the usage
              of its website.
            </TextBlock>
            <TextBlock>
              demodash.com also collects potentially personally-identifying
              information like Internet Protocol (IP) addresses for logged in
              users and for users leaving comments on https://demodash.com
              posts. demodash.com only discloses logged in user and commenter IP
              addresses under the same circumstances that it uses and discloses
              personally-identifying information as described below.
            </TextBlock>
            <SubTitle>Gathering of Personally-Identifying Information</SubTitle>
            <TextBlock>
              Certain visitors to demodash.com's websites choose to interact
              with demodash.com in ways that require demodash.com to gather
              personally-identifying information. The amount and type of
              information that demodash.com gathers depends on the nature of the
              interaction. For example, we ask visitors who sign up for an
              account at https://demodash.com to provide a username and email
              address and mailing address.
            </TextBlock>
            <SubTitle>Security</SubTitle>
            <TextBlock>
              The security of your Personal Information is important to us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While we strive to
              use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security.
            </TextBlock>
            <SubTitle>Advertisements</SubTitle>
            <TextBlock>
              Ads appearing on our website may be delivered to users by
              advertising partners, who may set cookies. These cookies allow the
              ad server to recognize your computer each time they send you an
              online advertisement to compile information about you or others
              who use your computer. This information allows ad networks to,
              among other things, deliver targeted advertisements that they
              believe will be of most interest to you. This Privacy Policy
              covers the use of cookies by demodash.com and does not cover the
              use of cookies by any advertisers.
            </TextBlock>
            <SubTitle>Links To External Sites</SubTitle>
            <TextBlock>
              Our Service may contain links to external sites that are not
              operated by us. If you click on a third party link, you will be
              directed to that third party's site. We strongly advise you to
              review the Privacy Policy and terms and conditions of every site
              you visit.
            </TextBlock>
            <TextBlock>
              We have no control over, and assume no responsibility for the
              content, privacy policies or practices of any third party sites,
              products or services.
            </TextBlock>
            <SubTitle>Aggregated Statistics</SubTitle>
            <TextBlock>
              demodash.com may collect statistics about the behavior of visitors
              to its website. demodash.com may display this information publicly
              or provide it to others. However, demodash.com does not disclose
              your personally-identifying information.
            </TextBlock>
            <SubTitle>Cookies</SubTitle>
            <TextBlock>
              To enrich and perfect your online experience, demodash.com uses
              "Cookies", similar technologies and services provided by others to
              display personalized content, appropriate advertising and store
              your preferences on your computer.
            </TextBlock>
            <TextBlock>
              A cookie is a string of information that a website stores on a
              visitor's computer, and that the visitor's browser provides to the
              website each time the visitor returns. demodash.com uses cookies
              to help demodash.com identify and track visitors, their usage of
              https://demodash.com, and their website access preferences.
              demodash.com visitors who do not wish to have cookies placed on
              their computers should set their browsers to refuse cookies before
              using demodash.com's websites, with the drawback that certain
              features of demodash.com's websites may not function properly
              without the aid of cookies.
            </TextBlock>
            <TextBlock>
              By continuing to navigate our website without changing your cookie
              settings, you hereby acknowledge and agree to demodash.com's use
              of cookies.
            </TextBlock>
            <SubTitle>E-commerce</SubTitle>
            <TextBlock>
              Those who engage in transactions with demodash.com – by purchasing
              demodash.com's services or products, are asked to provide
              additional information, including as necessary the personal and
              financial information required to process those transactions. In
              each case, demodash.com collects such information only insofar as
              is necessary or appropriate to fulfill the purpose of the
              visitor's interaction with demodash.com. demodash.com does not
              disclose personally-identifying information other than as
              described below. And visitors can always refuse to supply
              personally-identifying information, with the caveat that it may
              prevent them from engaging in certain website-related activities.
            </TextBlock>
            <SubTitle>Privacy Policy Changes</SubTitle>
            <TextBlock>
              Although most changes are likely to be minor, demodash.com may
              change its Privacy Policy from time to time, and in demodash.com's
              sole discretion. demodash.com encourages visitors to frequently
              check this page for any changes to its Privacy Policy. Your
              continued use of this site after any change in this Privacy Policy
              will constitute your acceptance of such change.
            </TextBlock>
          </Flex>
        </Box>
      </Section>
    );
  }
}
export default Privacy;
