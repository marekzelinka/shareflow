import { Flex, Box, Heading, Text, Stack } from "@chakra-ui/react";
import { Layout, CreateRoom, Divider, JoinRoom, Logo } from "client/components";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Home = () => (
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
        <Logo />
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
        <MotionBox
          px={{ base: 4, sm: 10 }}
          py={8}
          backgroundColor="white"
          shadow="base"
          rounded={{ sm: "lg" }}
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", damping: 12, stiffness: 200 }}
        >
          <CreateRoom />
          <Stack mt={6} spacing={6}>
            <Divider>Or continue with</Divider>
            <JoinRoom />
          </Stack>
        </MotionBox>
      </Box>
    </Flex>
  </Layout>
);

export default Home;
