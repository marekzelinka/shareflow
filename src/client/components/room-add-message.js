import { Box, Heading } from "@chakra-ui/react";
import { CreateMessage } from "./create-message";

export const RoomAddMessage = (props) => {
  const { roomId } = props;

  return (
    <Box as="section">
      <Box as="header" borderBottomWidth={1} borderTopColor="gray.200">
        <Box
          px={{ base: 4, sm: 0 }}
          pb={4}
          display={{ sm: "flex" }}
          alignItems={{ sm: "baseline" }}
        >
          <Heading as="h2" size="md" fontWeight="medium" textColor="gray.900">
            Add message
          </Heading>
        </Box>
      </Box>
      <Box mt={5} px={{ base: 4, sm: 0 }} minHeight="256px">
        <CreateMessage roomId={roomId} />
      </Box>
    </Box>
  );
};
