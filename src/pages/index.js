import { Flex, Box, Heading, Text, Stack, Image } from "@chakra-ui/react";
import { Layout, CreateRoom, Divider, JoinRoom } from "client/components";

const Home = () => {
  return (
    <Layout title="Home">
      <Flex
        px={{ sm: 6, lg: 8 }}
        py={12}
        minHeight="100vh"
        flexDirection="column"
        justifyContent="center"
        backgroundColor="gray.50"
      >
        <Box mx={{ sm: "auto" }} width={{ sm: "full" }} maxWidth={{ sm: "md" }}>
          <Image
            mx="auto"
            height={12}
            width="auto"
            src="/shareflow-logo-purple-600.svg"
            alt=""
          />
          <Heading
            as="h1"
            size="2xl"
            mt={6}
            fontWeight="bold"
            textAlign="center"
            textColor="gray.900"
            letterSpacing="tight"
          >
            Helper for your{" "}
            <Text as="span" textColor="purple.500">
              presentations
            </Text>
          </Heading>
          <Text mt={4} fontSize="sm" textAlign="center" textColor="gray.600">
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
            px={{ base: 4, sm: 10 }}
            py={8}
            backgroundColor="white"
            shadow="base"
            rounded={{ sm: "md" }}
          >
            <CreateRoom />
            <Stack mt={6} spacing={6}>
              <Divider>Or continue with</Divider>
              <JoinRoom />
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Home;
