import { useRouter } from "next/router";
import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { Result } from "../../components/result";
import { Spinner } from "../../components/spinner";
import { RoomHeader } from "../../components/room-header";
import { RoomMessages } from "../../components/room-messages";
import { Nav } from "../../components/nav";
import { useRoomQuery } from "../../hooks/use-room-query";

const Room = () => {
  const router = useRouter();
  const { slug } = router.query as { slug: string };
  const roomResult = useRoomQuery(slug);
  const room = roomResult.data;
  const title = roomResult.error
    ? "Something went wrong"
    : room === undefined
    ? "Loading. Please wait..."
    : `${room.title}, hosted by ${room.host}`;

  return (
    <>
      <Head>
        <title>shareflow | {title}</title>
      </Head>
      <Box minHeight="100vh" backgroundColor="white">
        <Nav />
        {roomResult.error ? (
          <Box as="main" pt={8} pb={16}>
            <Container maxWidth="3xl" px={{ base: 0, sm: 6, lg: 8 }}>
              <Box px={{ base: 4, sm: 0 }}>
                <Result
                  title="Uh oh! Something went wrong :("
                  description="A room with this ID doesn't exist, or an error occurred. Please try again."
                  status="error"
                />
              </Box>
            </Container>
          </Box>
        ) : room === undefined ? (
          <Box as="main" pt={8} pb={16}>
            <Container maxWidth="3xl" px={{ base: 0, sm: 6, lg: 8 }}>
              <Box px={{ base: 4, sm: 0 }}>
                <Spinner tip="Loading room" />
              </Box>
            </Container>
          </Box>
        ) : (
          <>
            <Box as="header" backgroundColor="gray.50" py={8}>
              <Container maxWidth="3xl" px={{ base: 4, sm: 6, lg: 8 }}>
                <RoomHeader room={room} />
              </Container>
            </Box>
            <Box as="main" pt={8} pb={16}>
              <Container maxWidth="3xl" px={{ base: 0, sm: 6, lg: 8 }}>
                <RoomMessages roomId={room.id} messages={room.messages} />
              </Container>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Room;
