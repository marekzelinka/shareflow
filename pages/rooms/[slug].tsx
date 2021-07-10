import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import { Result } from "../../components/result";
import { Spinner } from "../../components/spinner";
import { RoomHeader } from "../../components/room-header";
import { RoomMessages } from "../../components/room-messages";
import { Layout, LayoutContent, LayoutHeader } from "../../components/layout";
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
    <Layout title={title}>
      {roomResult.error ? (
        <LayoutContent>
          <Box px={{ base: 4, sm: 0 }}>
            <Result
              title="Uh oh! Something went wrong :("
              description="A room with this ID doesn't exist, or an error occurred. Please try again."
              status="error"
            />
          </Box>
        </LayoutContent>
      ) : room === undefined ? (
        <LayoutContent>
          <Box px={{ base: 4, sm: 0 }}>
            <Spinner tip="Loading room" />
          </Box>
        </LayoutContent>
      ) : (
        <>
          <LayoutHeader>
            <RoomHeader room={room} />
          </LayoutHeader>
          <LayoutContent>
            <Box py={8}>
              <RoomMessages roomId={room.id} messages={room.messages} />
            </Box>
          </LayoutContent>
        </>
      )}
    </Layout>
  );

  // return (
  //   <>
  //     <Head>
  //       <title>shareflow | {title}</title>
  //     </Head>
  //     <Box minHeight="100vh" backgroundColor="gray.50">
  //       <Nav />
  //       <Box py={10}>
  //         {roomResult.error ? (
  //           <Box as="main">
  //             <Container maxWidth="2xl" px={{ base: 0, sm: 6, lg: 8 }}>
  //               <Box px={{ base: 4, sm: 0 }}>
  //                 <Result
  //                   title="Uh oh! Something went wrong :("
  //                   description="A room with this ID doesn't exist, or an error occurred. Please try again."
  //                   status="error"
  //                 />
  //               </Box>
  //             </Container>
  //           </Box>
  //         ) : room === undefined ? (
  //           <Box as="main">
  //             <Container maxWidth="2xl" px={{ base: 0, sm: 6, lg: 8 }}>
  //               <Box px={{ base: 4, sm: 0 }}>
  //                 <Spinner tip="Loading room" />
  //               </Box>
  //             </Container>
  //           </Box>
  //         ) : (
  //           <>
  //             <Box as="header">
  //               <Container maxWidth="2xl" px={{ base: 4, sm: 6, lg: 8 }}>
  //                 <RoomHeader room={room} />
  //               </Container>
  //             </Box>
  //             <Box as="main">
  //               <Container maxWidth="2xl" px={{ base: 0, sm: 6, lg: 8 }}>
  //                 <Box py={8}>
  //                   <RoomMessages roomId={room.id} messages={room.messages} />
  //                 </Box>
  //               </Container>
  //             </Box>
  //           </>
  //         )}
  //       </Box>
  //     </Box>
  //   </>
  // );
};

export default Room;
