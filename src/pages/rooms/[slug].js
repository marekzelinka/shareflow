import { Box, Container, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Nav, RoomHeader, RoomMessages, Layout } from "client/components";
import { useRoomQuery } from "client/hooks/useRoomQuery";

const Room = () => {
  const router = useRouter();
  const { slug } = router.query;
  const roomResult = useRoomQuery(slug);
  const room = roomResult.data;
  console.log(room);

  if (room === undefined) {
    return null;
  }

  return (
    <Layout title={`${room.title}, hosted by ${room.host}`}>
      <Box position="relative" minHeight="100vh" backgroundColor="white">
        <Nav />
        <RoomHeader room={room} />
        <Box as="main" pt={8} pb={16}>
          <Container mx="auto" px={{ base: 0, sm: 6, lg: 8 }} maxWidth="2xl">
            <RoomMessages messages={room.messages} />
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Room;
