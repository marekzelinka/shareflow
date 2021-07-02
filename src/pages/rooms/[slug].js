import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
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
        <Layout.Nav />
        {roomResult.error ? (
          <Layout.Content>
            <Result
              title="Uh oh! Something went wrong :("
              description="A room with this ID doesn't exist, or an error occurred. Please try again."
              status="error"
            />
          </Layout.Content>
        ) : room === undefined ? (
          <Layout.Content>
            <Spinner tip="Loading room" />
          </Layout.Content>
        ) : (
          <>
            <Layout.Header>
              <RoomHeader room={room} />
            </Layout.Header>
            <Layout.Content>
              <RoomMessages roomId={room.id} messages={room.messages} />
            </Layout.Content>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Room;
