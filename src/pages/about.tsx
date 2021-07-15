import { Box, Container, Divider, Heading, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Nav } from "../components/nav";

const About = () => (
  <>
    <Head>
      <title>shareflow | About</title>
    </Head>
    <Box minHeight="100vh" backgroundColor="white">
      <Nav />
      <Box as="header" backgroundColor="gray.50" py={8}>
        <Container maxWidth="3xl" px={{ base: 4, sm: 6, lg: 8 }}>
          <Heading as="h1" size="lg">
            About
          </Heading>
        </Container>
      </Box>
      <Box as="main" pt={8} pb={16}>
        <Container maxWidth="3xl" px={{ base: 0, sm: 6, lg: 8 }}>
          <Box px={{ base: 4, sm: 0 }}>
            <Text fontSize="xl" textColor="gray.500">
              shareflow is a helper for your presentations, where you can create
              a room, share the URL with the attendees, and collaborate!
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
                textColor="green.500"
              >
                website
              </Link>
              , or{" "}
              <Link
                href="mailto:mzelinka17@gmail.com"
                fontWeight="medium"
                textColor="green.500"
              >
                reach out via email
              </Link>
              .
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  </>
);

export default About;
