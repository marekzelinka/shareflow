import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Flex,
  List,
  ListItem,
  Link,
  Icon,
  Text,
} from "@chakra-ui/react";
import { CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { formatDate } from "../utils/format-date";
import { Message } from "../types";
import { AddRoomMessage } from "./add-room-message";
import { CodeHighlight } from "./code-highlight";
import { EmptyState } from "./empty-state";

const MotionBox = motion(Box);

interface MessageItemProps {
  message: Message;
}

const MessageItem = ({ message }: MessageItemProps) => (
  <MotionBox py={{ base: 5, sm: 6 }} px={{ base: 4, sm: 0 }} layout>
    {message.type === "link" ? (
      <Link
        display="block"
        fontWeight="medium"
        textColor="purple.500"
        isTruncated
        isExternal
        href={message.url}
      >
        {message.url}
      </Link>
    ) : (
      <CodeHighlight
        language={message.language}
        codeString={message.code_string}
      />
    )}
    <Flex
      mt={{ base: 1, sm: 0 }}
      flexDirection={{ base: "column", sm: "row" }}
      flexWrap={{ sm: "wrap" }}
    >
      <Stack
        mt={2}
        direction="row"
        spacing={1.5}
        alignItems="center"
        fontSize="sm"
        textColor="gray.500"
      >
        <Icon
          as={CalendarIcon}
          textColor="gray.400"
          width={5}
          height={5}
          aria-hidden="true"
        />
        <Text as="span">{formatDate(message.inserted_at)}</Text>
      </Stack>
    </Flex>
  </MotionBox>
);

interface MessageListProps {
  messages: Message[];
}

export const MessageList = ({ messages }: MessageListProps) => (
  <List as="ol">
    {messages.map((message) => (
      <ListItem
        key={message.id}
        _notFirst={{
          borderTopWidth: 1,
        }}
      >
        <MessageItem message={message} />
      </ListItem>
    ))}
  </List>
);

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
            <AddRoomMessage roomId={roomId} />
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
            <EmptyState
              title="No messages found"
              description="Get started by adding a new message."
            >
              <AddRoomMessage roomId={roomId} />
            </EmptyState>
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
