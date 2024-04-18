import * as React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"; 

interface EmailTemplateProps {
  fullName: string;
  title: string;
  description: string;
  email: string;
}

const baseUrl = "https://www.reactemailtemplate.com/";

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  title,
  description,
  email,
}) => (
  <Html>
    <Head>
      <Font
        fontFamily="Inter"
        fallbackFontFamily="Helvetica"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>Unterstützung</Preview>
    <Tailwind>
      <Body className="mx-auto my-auto bg-white font-sans antialiased">
        <Container className="mx-auto my-[40px] w-[600px] max-w-[600px] rounded-lg border border-solid border-gray-200 bg-white px-8">
          <Section className="mt-14 mb-10">
            <Row>
              <Column className="w-[80%] mx-auto text-center">
                <Text className="m-0 !font-extrabold text-3xl">
                  Move<span className="text-orange-500">Mate</span>
                </Text>
              </Column>
            </Row>
          </Section>
          <Section className="relative rounded-xl bg-blue-400 !text-center">
            <div className="bottom-0 left-0 right-0 top-10 mx-auto my-auto p-10">
              <Text className="m-0 font-bold text-[16px] text-white">
                Technische Unterstützung
              </Text>
            </div>
          </Section>
          <Hr className="mx-0 my-10 w-full border border-solid border-gray-200" />
          <Section>
            <Row className="mt-8 flex gap-5">
              <Text className="m-0 text-xl font-semibold text-gray-900">
                Name:{" "}
                <span className="mt-2 text-[16px] text-gray-500">
                  {" "}
                  {fullName}
                </span>
              </Text>
            </Row>
          </Section>
          <Section>
            <Row className="mt-8 flex gap-5">
              <Text className="m-0 text-xl font-semibold text-gray-900">
                Email:{" "}
                <span className="mt-2 text-[16px] text-gray-500">{email}</span>
              </Text>
            </Row>
          </Section>
          <Section>
            <Row className="mt-8 flex gap-5">
              <Text className="m-0 text-xl font-semibold text-gray-900">
                Thema:{" "}
                <span className="mt-2 text-[16px] text-gray-500"> {title}</span>
              </Text>
            </Row>
          </Section>
          <Section>
            <Row className="mt-8 flex gap-5">
              <Text className="m-0 text-xl font-semibold text-gray-900">
                Message:{" "}
                <span className="mt-2 text-[16px] text-gray-500">
                  {" "}
                  {description}
                </span>
              </Text>
            </Row>
          </Section>
          <Hr className="mx-0 my-10 w-full border border-solid border-gray-200" />
          <Section className="pb-10">
            <Row>
              <Column className="w-[45%]">
                <Text className=" !font-extrabold text-3xl">
                  Move<span className="text-orange-500">Mate</span>
                </Text>
                <Text className="my-2 text-[16px] font-semibold text-gray-900">
                  Transaktion
                </Text>
                <Text className="mt-1 text-[16px] text-gray-500">
                  Denke anders
                </Text>
              </Column>
              <Column align="left" className="table-cell align-bottom">
                <Row className="table-cell h-[42px] w-[56px] align-bottom">
                  <Column>
                    <Link href="#">
                      <Img
                        src={`${baseUrl}/facebook-logo.png`}
                        className="-ml-1 mr-1"
                        width="36"
                        height="36"
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="#">
                      <Img
                        src={`${baseUrl}/twitter-logo.png`}
                        className="mx-1"
                        width="36"
                        height="36"
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="#">
                      <Img
                        src={`${baseUrl}/instagram-logo.png`}
                        className="mx-1"
                        width="36"
                        height="36"
                      />
                    </Link>
                  </Column>
                </Row>
                <Row>
                  <Text className="my-2 text-[16px] text-gray-500">
                    123 Main Street Anytown, CA 12345
                  </Text>
                  <Text className="mt-1 text-[16px] text-gray-500">
                    MoveMate@info.ch +07723234234
                  </Text>
                </Row>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
