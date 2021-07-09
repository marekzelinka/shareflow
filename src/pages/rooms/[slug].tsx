import { useRouter } from "next/router";
import Head from "next/head";
import {
  RoomHeader,
  RoomMessages,
  Result,
  Spinner,
  Nav,
} from "client/components";
import { useRoomQuery } from "client/utils/hooks";
import { Box, Container } from "@chakra-ui/react";

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
      <Box minHeight="100vh" backgroundColor="gray.50">
        <Nav />
        <Box py={10}>
          {roomResult.error ? (
            <Box as="main">
              <Container maxWidth="2xl" px={{ base: 0, sm: 6, lg: 8 }}>
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
            <Box as="main">
              <Container maxWidth="2xl" px={{ base: 0, sm: 6, lg: 8 }}>
                <Box px={{ base: 4, sm: 0 }}>
                  <Spinner tip="Loading room" />
                </Box>
              </Container>
            </Box>
          ) : (
            <>
              <Box as="header">
                <Container maxWidth="2xl" px={{ base: 4, sm: 6, lg: 8 }}>
                  <RoomHeader room={room} />
                </Container>
              </Box>
              <Box as="main">
                <Container maxWidth="2xl" px={{ base: 0, sm: 6, lg: 8 }}>
                  <Box py={8}>
                    <RoomMessages roomId={room.id} messages={room.messages} />
                  </Box>
                </Container>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>

    // <Layout title={title}>
    //   <LayoutNav />
    //   <LayoutContent>
    //     {roomResult.error ? (
    //       <LayoutMain>
    //         <Result
    //           title="Uh oh! Something went wrong :("
    //           description="A room with this ID doesn't exist, or an error occurred. Please try again."
    //           status="error"
    //         />
    //       </LayoutMain>
    //     ) : room === undefined ? (
    //       <LayoutMain>
    //         <Spinner tip="Loading room" />
    //       </LayoutMain>
    //     ) : (
    //       <>
    //         <LayoutHeader>
    //           <RoomHeader room={room} />
    //         </LayoutHeader>
    //         <LayoutMain>
    //           <RoomMessages roomId={room.id} messages={room.messages} />
    //         </LayoutMain>
    //       </>
    //     )}
    //   </LayoutContent>
    // </Layout>
  );
};

export default Room;
