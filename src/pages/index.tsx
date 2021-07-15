import { Flex, Box, Heading, Text, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { CreateRoom } from "../components/create-room";
import { Divider } from "../components/divider";
import { JoinRoom } from "../components/join-room";
import { Logo } from "../components/logo";

const Home = () => (
  <>
    <Head>
      <title>shareflow | Home</title>
    </Head>
    <Flex
      as="main"
      minHeight="100vh"
      backgroundColor="gray.50"
      flexDirection="column"
      justifyContent="center"
      py={12}
      px={{ sm: 6, lg: 8 }}
    >
      <Box mx={{ sm: "auto" }} width={{ sm: "full" }} maxWidth={{ sm: "md" }}>
        <Logo />
        <Heading as="h1" mt={6} textAlign="center" size="lg">
          A better way to{" "}
          <Text as="span" textColor="green.500">
            collaborate
          </Text>
        </Heading>
        <Text mt={2} textAlign="center" fontSize="sm" textColor="gray.600">
          Easily{" "}
          <Text as="span" fontWeight="medium" textColor="green.500">
            share links and snippets with your attendees
          </Text>
        </Text>
      </Box>
      <Box
        mt={8}
        mx={{ sm: "auto" }}
        width={{ sm: "full" }}
        maxWidth={{ sm: "md" }}
      >
        <Box
          backgroundColor="white"
          py={8}
          px={{ base: 4, sm: 10 }}
          shadow="base"
          rounded={{ sm: "lg" }}
        >
          <Stack spacing={6}>
            <CreateRoom />
            <Divider>Or continue with</Divider>
            <JoinRoom />
          </Stack>
        </Box>
      </Box>
    </Flex>
  </>
);

export default Home;
