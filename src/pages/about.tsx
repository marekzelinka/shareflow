import { Box, Divider, Heading, Link, Text } from "@chakra-ui/react";
import { Layout } from "client/components";

const About = () => (
  <Layout title="About">
    <Layout.Nav />
    <Layout.Header>
      <Heading
        as="h1"
        size="md"
        fontWeight="bold"
        textColor="gray.900"
        isTruncated
      >
        About
      </Heading>
    </Layout.Header>
    <Layout.Content>
      <Box px={{ base: 4, sm: 0 }}>
        <Text fontSize="lg">
          shareflow is a helper for your presentations, where you can create a
          room, share the URL with the attendees, and collaborate!
        </Text>
        <Heading
          as="h2"
          mt={6}
          size="md"
          fontWeight="medium"
          textColor="gray.900"
        >
          Get your attendees involved
        </Heading>
        <Text mt={2}>
          You can share useful links and snippets with others. For code
          snippets, we support 8 programming languages.
        </Text>
        <Divider mt={6} />
        <Heading
          as="h2"
          mt={6}
          size="md"
          fontWeight="medium"
          textColor="gray.900"
        >
          Contact
        </Heading>
        <Text mt={2}>
          shareflow has been created by Marek Zelinka. You can find out more
          about him on his{" "}
          <Link
            href="https://www.marekzelinka.dev/"
            fontWeight="medium"
            textColor="purple.600"
          >
            website
          </Link>
          , or{" "}
          <Link
            href="mailto:mzelinka17@gmail.com"
            fontWeight="medium"
            textColor="purple.600"
          >
            reach out via email
          </Link>
          .
        </Text>
      </Box>
    </Layout.Content>
  </Layout>
);

export default About;
