import { Box, Button, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  Nav,
  RoomHeader,
  RoomMessages,
  Layout,
  Result,
  Spinner,
} from "client/components";
import { useRoomQuery } from "client/hooks";

const Room = () => {
  const router = useRouter();
  const { slug } = router.query;
  const roomResult = useRoomQuery(slug);
  const room = roomResult.data;
  const title = roomResult.error
    ? "Something went wrong"
    : room === undefined
    ? "Loading. Please wait..."
    : `${room.title}, hosted by ${room.host}`;

  return (
    <Layout title={title}>
      <Box position="relative" minHeight="100vh" backgroundColor="white">
        <Nav />
        {roomResult.error ? (
          <Box as="main" pt={8} pb={16}>
            <Container mx="auto" px={{ base: 0, sm: 6, lg: 8 }} maxWidth="2xl">
              <Result
                title="Uh oh! Something went wrong :("
                description="A room with this ID doesn't exist, or an error occurred. Please try again."
                status="error"
              >
                <Button>Click here</Button>
              </Result>
            </Container>
          </Box>
        ) : room === undefined ? (
          <Box as="main" pt={8} pb={16}>
            <Container mx="auto" px={{ base: 0, sm: 6, lg: 8 }} maxWidth="2xl">
              <Spinner tip="Loading room" />
            </Container>
          </Box>
        ) : (
          <>
            <RoomHeader room={room} />
            <Box as="main" pt={8} pb={16}>
              <Container
                mx="auto"
                px={{ base: 0, sm: 6, lg: 8 }}
                maxWidth="2xl"
              >
                <RoomMessages roomId={room.id} messages={room.messages} />
              </Container>
            </Box>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Room;
