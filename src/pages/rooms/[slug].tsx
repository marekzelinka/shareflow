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
  LayoutMain,
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
      <LayoutNav />
      <LayoutContent>
        {roomResult.error ? (
          <LayoutMain>
            <Result
              title="Uh oh! Something went wrong :("
              description="A room with this ID doesn't exist, or an error occurred. Please try again."
              status="error"
            />
          </LayoutMain>
        ) : room === undefined ? (
          <LayoutMain>
            <Spinner tip="Loading room" />
          </LayoutMain>
        ) : (
          <>
            <LayoutHeader>
              <RoomHeader room={room} />
            </LayoutHeader>
            <LayoutMain>
              <RoomMessages roomId={room.id} messages={room.messages} />
            </LayoutMain>
          </>
        )}
      </LayoutContent>
    </Layout>
  );
};

export default Room;
