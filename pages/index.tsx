import { Flex, Box, Heading, Text, Stack } from "@chakra-ui/react";
import { CreateRoom } from "../components/create-room";
import { Divider } from "../components/divider";
import { JoinRoom } from "../components/join-room";
import { Layout } from "../components/layout";
import { Logo } from "../components/logo";

const Home = () => (
  <Layout title="Home">
    <Flex
      flex={1}
      flexDirection="column"
      justifyContent="center"
      py={12}
      px={{ sm: 6, lg: 8 }}
    >
      <Box mx={{ sm: "auto" }} width={{ sm: "full" }} maxWidth={{ sm: "md" }}>
        <Logo />
        <Heading as="h1" mt={6} textAlign="center" size="lg">
          Keep track of your{" "}
          <Text as="span" textColor="purple.500">
            presentations
          </Text>
        </Heading>
        <Text mt={2} textAlign="center" fontSize="sm" textColor="gray.600">
          Create a room, share the URL with the attendees, and{" "}
          <Text as="span" fontWeight="medium" textColor="purple.500">
            collaborate
          </Text>
          !
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
  </Layout>
);

export default Home;