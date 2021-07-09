import {
  Box,
  Flex,
  List,
  ListItem,
  Link,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CalendarIcon } from "@heroicons/react/solid";
import { formatDate } from "client/utils/helpers";
import { Message } from "client/utils/types";
import { motion } from "framer-motion";
import { CodeBlock } from "./code-block";

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
      <CodeBlock language={message.language} codeString={message.code_string} />
    )}
    <Flex
      mt={{ base: 1, sm: 0 }}
      flexDirection={{ base: "column", sm: "row" }}
      flexWrap={{ sm: "wrap" }}
    >
      <Stack mt={2} direction="row" spacing={1.5} alignItems="center">
        <Icon
          as={CalendarIcon}
          textColor="gray.400"
          width={5}
          height={5}
          aria-hidden="true"
        />
        <Text as="span" fontSize="sm" textColor="gray.500">
          {formatDate(message.inserted_at)}
        </Text>
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
