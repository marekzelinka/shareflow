import { Flex, Box, Heading, Text, Stack } from "@chakra-ui/react";
import {
  Layout,
  CreateRoom,
  Divider,
  JoinRoom,
  Logo,
  LayoutContent,
  LayoutMain,
} from "client/components";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Home = () => (
  <Layout title="Home">
    <LayoutContent>
      <LayoutMain>
        <Box mx={{ sm: "auto" }} width={{ sm: "full" }} maxWidth={{ sm: "md" }}>
          <Logo />
          <Heading as="h1" mt={6} textAlign="center" size="lg">
            Helper for your{" "}
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
          <MotionBox
            backgroundColor="white"
            py={8}
            px={{ base: 4, sm: 10 }}
            shadow="base"
            rounded={{ sm: "lg" }}
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", damping: 12, stiffness: 200 }}
          >
            <Stack spacing={6}>
              <CreateRoom />
              <Divider>Or continue with</Divider>
              <JoinRoom />
            </Stack>
          </MotionBox>
        </Box>
      </LayoutMain>
    </LayoutContent>
  </Layout>
);

export default Home;
