import { Box, Divider, Heading, Link, Text } from "@chakra-ui/react";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutMain,
  LayoutNav,
} from "client/components";

const About = () => (
  <Layout title="About">
    <LayoutNav />
    <LayoutContent>
      <LayoutHeader>
        <Heading as="h1" size="lg">
          About
        </Heading>
      </LayoutHeader>
      <LayoutMain>
        <Box px={{ base: 4, sm: 0 }}>
          <Text fontSize="lg">
            shareflow is a helper for your presentations, where you can create a
            room, share the URL with the attendees, and collaborate!
          </Text>
          <Heading as="h2" mt={6} size="md" fontWeight="medium">
            Get your attendees involved
          </Heading>
          <Text mt={2}>
            You can share useful links and snippets with others. For code
            snippets, we support 8 programming languages.
          </Text>
          <Divider mt={6} />
          <Heading as="h2" mt={6} size="md" fontWeight="medium">
            Contact
          </Heading>
          <Text mt={2}>
            shareflow has been created by Marek Zelinka. You can find out more
            about him on his{" "}
            <Link
              href="https://www.marekzelinka.dev/"
              fontWeight="medium"
              textColor="purple.500"
            >
              website
            </Link>
            , or{" "}
            <Link
              href="mailto:mzelinka17@gmail.com"
              fontWeight="medium"
              textColor="purple.500"
            >
              reach out via email
            </Link>
            .
          </Text>
        </Box>
      </LayoutMain>
    </LayoutContent>
  </Layout>
);

export default About;
