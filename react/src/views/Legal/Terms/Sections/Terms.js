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
              Terms of Service
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
              These terms and conditions outline the rules and regulations for
              the use of demodash{"'"}s website.
            </Text>
            <Text mb={5}>
              demodash.com
              <br />
              8412 Paul Drive, WEST CHESTER <br />
              45069 - OH , United States
              <br />
            </Text>
            <TextBlock>
              By accessing this website we assume you accept these terms and
              conditions in full. Do not continue to use{" "}
              <a href="https://demodash.com">demodash.com's</a> website if you
              do not accept all of the terms and conditions stated on this page.
            </TextBlock>
            <TextBlock>
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and any or all Agreements:
              "Client", "You" and "Your" refers to you, the person accessing
              this website and accepting the Company 's terms and conditions.
              "The Company", "Ourselves", "We", "Our" and "Us", refers to our
              Company. "Party", "Parties", or "Us", refers to both the Client
              and ourselves, or either the Client or ourselves. All terms refer
              to the offer, acceptance and consideration of payment necessary to
              undertake the process of our assistance to the Client in the most
              appropriate manner, whether by formal meetings of a fixed
              duration, or any other means, for the express purpose of meeting
              the Client 's needs in respect of provision of the Company 's
              stated services/products, in accordance with and subject to,
              prevailing law of United States. Any use of the above terminology
              or other words in the singular, plural, capitalisation and / or he
              / she or they, are taken as interchangeable and therefore as
              referring to same.
            </TextBlock>
            <SubTitle>Cookies</SubTitle>
            <TextBlock>
              We employ the use of cookies. By using demodash.com 's website you
              consent to the use of cookies in accordance with demodash.com 's
              privacy policy.
            </TextBlock>
            <TextBlock>
              Most of the modern day interactive web sites use cookies to enable
              us to retrieve user details for each visit. Cookies are used in
              some areas of our site to enable the functionality of this area
              and ease of use for those people visiting. Some of our affiliate /
              advertising partners may also use cookies.
            </TextBlock>
            <SubTitle>License</SubTitle>
            <TextBlock>
              Unless otherwise stated, demodash.com and or it 's licensors own
              the intellectual property rights for all material on demodash.com.
              All intellectual property rights are reserved. You may view and or
              print pages from https://demodash.com for your own personal use
              subject to restrictions set in these terms and conditions.
            </TextBlock>
            <TextBlock> You must not: </TextBlock>
            <ol>
              <li>
                <Text>Republish material from https://demodash.com</Text>
              </li>
              <li>
                <Text>
                  Sell, rent or sub - license material from https://demodash.com
                </Text>
              </li>
              <li>
                <Text>
                  Reproduce, duplicate or copy material from
                  https://demodash.com
                </Text>
              </li>
            </ol>
            <TextBlock>
              Redistribute content from demodash.com(unless content is
              specifically made for redistribution).
            </TextBlock>
            <SubTitle> Hyperlinking to our Content </SubTitle>
            <ol>
              <Text>
                The following organizations may link to our Web site without
                prior written approval:
              </Text>
              <ol>
                <li>
                  <Text>Government agencies;</Text>
                </li>
                <li>
                  <Text>Search engines;</Text>
                </li>
                <li>
                  <Text>News organizations;</Text>
                </li>
                <li>
                  <Text>
                    Online directory distributors when they list us in the
                    directory may link to our Web site in the same manner as
                    they hyperlink to the Web sites of other listed businesses;
                    and
                  </Text>
                </li>
                <li>
                  <Text>
                    Systemwide Accredited Businesses except soliciting non -
                    profit organizations, charity shopping malls, and charity
                    fundraising groups which may not hyperlink to our Web site.
                  </Text>
                </li>
              </ol>
            </ol>
            <ol start="2">
              <li>
                <Text>
                  These organizations may link to our home page, to publications
                  or to other Web site information so long as the link: (a) is
                  not in any way misleading; (b) does not falsely imply
                  sponsorship, endorsement or approval of the linking party and
                  its products or services; and(c) fits within the context of
                  the linking party 's site.
                </Text>
              </li>
              <li>
                <Text>
                  We may consider and approve in our sole discretion other link
                  requests from the following types of organizations:
                </Text>
                <ol>
                  <li>
                    <Text>
                      commonly - known consumer and / or business information
                      sources such as Chambers of Commerce, American Automobile
                      Association, AARP and Consumers Union;
                    </Text>
                  </li>
                  <li>
                    <Text>dot.com community sites;</Text>
                  </li>
                  <li>
                    <Text>
                      associations or other groups representing charities,
                      including charity giving sites,
                    </Text>
                  </li>
                  <li>
                    <Text>online directory distributors;</Text>
                  </li>
                  <li>
                    <Text>internet portals;</Text>
                  </li>
                  <li>
                    <Text>
                      accounting, law and consulting firms whose primary clients
                      are businesses; and
                    </Text>
                  </li>
                  <li>
                    <Text>
                      educational institutions and trade associations.
                    </Text>
                  </li>
                </ol>
              </li>
            </ol>
            <TextBlock>
              We will approve link requests from these organizations if we
              determine that: (a) the link would not reflect unfavorably on us
              or our accredited businesses( for example, trade associations or
              other organizations representing inherently suspect types of
              business, such as work - at - home opportunities, shall not be
              allowed to link); (b) the organization does not have an
              unsatisfactory record with us; (c) the benefit to us from the
              visibility associated with the hyperlink outweighs the absence of
              demodash; and(d) where the link is in the context of general
              resource information or is otherwise consistent with editorial
              content in a newsletter or similar product furthering the mission
              of the organization.
            </TextBlock>
            <TextBlock>
              These organizations may link to our home page, to publications or
              to other Web site information so long as the link: (a) is not in
              any way misleading; (b) does not falsely imply sponsorship,
              endorsement or approval of the linking party and it products or
              services; and(c) fits within the context of the linking party 's
              site.
            </TextBlock>
            <TextBlock>
              If you are among the organizations listed in paragraph 2 above and
              are interested in linking to our website, you must notify us by
              sending an email to{" "}
              <a
                href="mailto:support@demodash.com"
                title="send an email to support@demodash.com"
              >
                support@demodash.com
              </a>
              . Please include your name, your organization name, contact
              information(such as a phone number and / or e - mail address) as
              well as the URL of your site, a list of any URLs from which you
              intend to link to our Web site, and a list of the URL(s) on our
              site to which you would like to link. Allow for up to 2 - 3 weeks
              for a response.
            </TextBlock>
            <TextBlock>
              Approved organizations may hyperlink to our Web site as follows:
            </TextBlock>
            <ol>
              <li>
                <Text>By use of our corporate name; or</Text>
              </li>
              <li>
                <Text>
                  By use of the uniform resource locator(Web address) being
                  linked to; or
                </Text>
              </li>
              <li>
                <Text>
                  By use of any other description of our Web site or material
                  being linked to that makes sense within the context and format
                  of content on the linking party 's site.
                </Text>
              </li>
            </ol>
            <TextBlock>
              No use of demodash.com 's logo or other artwork will be allowed
              for linking absent a trademark license agreement.
            </TextBlock>
            <SubTitle> Iframes </SubTitle>
            <TextBlock>
              Without prior approval and express written permission, you may not
              create frames around our Web pages or use other techniques that
              alter in any way the visual presentation or appearance of our Web
              site.
            </TextBlock>
            <SubTitle> Reservation of Rights </SubTitle>
            <TextBlock>
              We reserve the right at any time and in its sole discretion to
              request that you remove all links or any particular link to our
              Web site. You agree to immediately remove all links to our Web
              site upon such request. We also reserve the right to amend these
              terms and conditions and its linking policy at any time. By
              continuing to link to our Web site, you agree to be bound to and
              abide by these linking terms and conditions.
            </TextBlock>
            <SubTitle> Removal of links from our website </SubTitle>
            <TextBlock>
              If you find any link on our Web site or any linked web site
              objectionable for any reason, you may contact us about this. We
              will consider requests to remove links but will have no obligation
              to do so or to respond directly to you.
            </TextBlock>
            <TextBlock>
              Whilst we endeavour to ensure that the information on this website
              is correct, we do not warrant its completeness or accuracy; nor do
              we commit to ensuring that the website remains available or that
              the material on the website is kept up to date.
            </TextBlock>
            <SubTitle> Content Liability </SubTitle>
            <TextBlock>
              We shall have no responsibility or liability for any content
              appearing on your Web site. You agree to indemnify and defend us
              against all claims arising out of or based upon your Website. No
              link(s) may appear on any page on your Web site or within any
              context containing content or materials that may be interpreted as
              libelous, obscene or criminal, or which infringes, otherwise
              violates, or advocates the infringement or other violation of ,
              any third party rights.
            </TextBlock>
            <SubTitle> Disclaimer </SubTitle>
            <TextBlock>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website(including, without limitation, any
              warranties implied by law in respect of satisfactory quality,
              fitness for purpose and / or the use of reasonable care and
              skill). Nothing in this disclaimer will:
            </TextBlock>
            <ol>
              <li>
                <Text>
                  limit or exclude our or your liability for death or personal
                  injury resulting from negligence;
                </Text>
              </li>
              <li>
                <Text>
                  limit or exclude our or your liability for fraud or fraudulent
                  misrepresentation;
                </Text>
              </li>
              <li>
                <Text>
                  limit any of our or your liabilities in any way that is not
                  permitted under applicable law; or
                </Text>
              </li>
              <li>
                <Text>
                  exclude any of our or your liabilities that may not be
                  excluded under applicable law.
                </Text>
              </li>
            </ol>
            <TextBlock>
              The limitations and exclusions of liability set out in this
              Section and elsewhere in this disclaimer: (a) are subject to the
              preceding paragraph; and(b) govern all liabilities arising under
              the disclaimer or in relation to the subject matter of this
              disclaimer, including liabilities arising in contract, in
              tort(including negligence) and for breach of statutory duty.
            </TextBlock>
            <TextBlock>
              To the extent that the website and the information and services on
              the website are provided free of charge, we will not be liable for
              any loss or damage of any nature.
            </TextBlock>
          </Flex>
        </Box>
      </Section>
    );
  }
}
export default Privacy;
