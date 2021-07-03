import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  RoomHeader,
  RoomMessages,
  Result,
  Spinner,
  Layout,
  LayoutNav,
  LayoutHeader,
  LayoutContent,
} from "client/components";
import { useRoomQuery } from "client/utils/hooks";

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
    <Layout title={title}>
      <Box position="relative" minHeight="100vh" backgroundColor="white">
        <LayoutNav />
        {roomResult.error ? (
          <LayoutContent>
            <Result
              title="Uh oh! Something went wrong :("
              description="A room with this ID doesn't exist, or an error occurred. Please try again."
              status="error"
            />
          </LayoutContent>
        ) : room === undefined ? (
          <LayoutContent>
            <Spinner tip="Loading room" />
          </LayoutContent>
        ) : (
          <>
            <LayoutHeader>
              <RoomHeader room={room} />
            </LayoutHeader>
            <LayoutContent>
              <RoomMessages roomId={room.id} messages={room.messages} />
            </LayoutContent>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Room;
