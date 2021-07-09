import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
} from "@chakra-ui/react";
import { Message } from "client/utils/types";
import { AddMessage } from "./add-message";
import { Empty } from "./empty";
import { MessageList } from "./message-list";

interface RoomMessagesProps {
  roomId: string;
  messages: Message[];
}

export const RoomMessages = ({ roomId, messages }: RoomMessagesProps) => {
  const links = messages.filter((message) => message.type === "link");
  const snippets = messages.filter((message) => message.type === "snippet");

  return (
    <Tabs as="section" colorScheme="purple" size="sm">
      <Box
        as="header"
        position="relative"
        borderBottomWidth={1}
        px={{ base: 4, sm: 0 }}
      >
        <Box
          display={{ md: "flex" }}
          alignItems={{ md: "center" }}
          justifyContent={{ md: "space-between" }}
        >
          <Heading as="h2" size="md" fontWeight="medium">
            Previous messages
          </Heading>
          <Stack
            spacing={3}
            mt={{ base: 3, md: 0 }}
            position={{ md: "absolute" }}
            top={{ md: 3 }}
            right={{ md: 0 }}
          >
            <AddMessage roomId={roomId} />
          </Stack>
        </Box>
        <Box mt={4}>
          <TabList borderBottomWidth={0}>
            <Tab
              mb={0}
              pt={0}
              pb={4}
              px={1}
              fontWeight="medium"
              textColor="gray.500"
              borderBottomWidth={2}
              borderBottomColor="transparent"
              _hover={{
                textColor: "gray.700",
                borderBottomColor: "gray.200",
                _selected: {
                  textColor: "purple.500",
                  borderBottomColor: "purple.400",
                },
              }}
              _selected={{
                textColor: "purple.500",
                borderBottomColor: "purple.400",
                _hover: {
                  textColor: "purple.500",
                  borderBottomColor: "purple.400",
                },
              }}
              _active={{ backgroundColor: "transparent" }}
            >
              All
            </Tab>
            <Tab
              mb={0}
              ml={8}
              pt={0}
              pb={4}
              px={1}
              fontWeight="medium"
              textColor="gray.500"
              borderBottomWidth={2}
              borderBottomColor="transparent"
              _hover={{
                textColor: "gray.700",
                borderBottomColor: "gray.200",
                _selected: {
                  textColor: "purple.500",
                  borderBottomColor: "purple.400",
                },
              }}
              _selected={{
                textColor: "purple.500",
                borderBottomColor: "purple.400",
                _hover: {
                  textColor: "purple.500",
                  borderBottomColor: "purple.400",
                },
              }}
              _active={{ backgroundColor: "transparent" }}
              isDisabled={links.length === 0}
            >
              Links
            </Tab>
            <Tab
              mb={0}
              ml={8}
              pt={0}
              pb={4}
              px={1}
              fontWeight="medium"
              textColor="gray.500"
              borderBottomWidth={2}
              borderBottomColor="transparent"
              _hover={{
                textColor: "gray.700",
                borderBottomColor: "gray.200",
                _selected: {
                  textColor: "purple.500",
                  borderBottomColor: "purple.400",
                },
              }}
              _selected={{
                textColor: "purple.500",
                borderBottomColor: "purple.400",
                _hover: {
                  textColor: "purple.500",
                  borderBottomColor: "purple.400",
                },
              }}
              _active={{ backgroundColor: "transparent" }}
              isDisabled={snippets.length === 0}
            >
              Snippets
            </Tab>
          </TabList>
        </Box>
      </Box>
      <TabPanels>
        <TabPanel p={0}>
          {messages.length > 0 ? (
            <MessageList messages={messages} />
          ) : (
            <Empty
              title="No messages found"
              description="Get started by adding a new message."
            >
              <AddMessage roomId={roomId} />
            </Empty>
          )}
        </TabPanel>
        <TabPanel p={0}>
          <MessageList messages={links} />
        </TabPanel>
        <TabPanel p={0}>
          <MessageList messages={snippets} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
