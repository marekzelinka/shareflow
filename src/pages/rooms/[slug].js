import { Box, Container, Stack } from "@chakra-ui/react";
import {
  Nav,
  RoomHeader,
  AddMessage,
  RoomMessages,
  Layout,
} from "client/components";

const roomData = {
  title: "Web Development From Scratch",
  host: "Marek Zelinka",
  createdAt: new Date("January 9, 2020, 2:49 PM").toISOString(),
  messages: [
    {
      id: "001",
      type: "link",
      url: "https://tailwindui.com/components/application-ui/page-examples/detail-screens",
      createdAt: new Date("January 9, 2020, 2:55 PM").toISOString(),
    },
    {
      id: "002",
      type: "link",
      url: "https://chakra-ui.com/docs/features/style-props",
      createdAt: new Date("January 9, 2020, 3:02 PM").toISOString(),
    },
    {
      id: "003",
      type: "snippet",
      language: "jsx",
      codeString: `let Room = () => {
        return (
          <Box position="relative" minHeight="100vh" backgroundColor="white">
            <Head>
              <title>shareflow | Web Development From Scratch</title>
            </Head>
            <Nav />
            <RoomHeader />
            <Box as="main" pt={8} pb={16}>
              <Container mx="auto" px={{ base: 0, sm: 6, lg: 8 }} maxWidth="2xl">
                <Stack spacing={6}>
                  <AddMessage />
                  <RoomMessages />
                </Stack>
              </Container>
            </Box>
          </Box>
        );
      };`,
      createdAt: new Date("January 9, 2020, 3:14 PM").toISOString(),
    },
  ],
};

const Room = () => {
  return (
    <Layout title={`${roomData.title}, hosted by ${roomData.host}`}>
      <Box position="relative" minHeight="100vh" backgroundColor="white">
        <Nav />
        <RoomHeader room={roomData} />
        <Box as="main" pt={8} pb={16}>
          <Container mx="auto" px={{ base: 0, sm: 6, lg: 8 }} maxWidth="2xl">
            <Stack spacing={6}>
              <AddMessage />
              <RoomMessages messages={roomData.messages} />
            </Stack>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Room;
