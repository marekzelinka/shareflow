import { Box, Flex, List, ListItem, Link, Icon } from "@chakra-ui/react";
import { CalendarIcon } from "@heroicons/react/solid";
import dynamic from "next/dynamic";
import { formatDate } from "client/utils";

const CodeBlock = dynamic(
  () => import("./code-block").then((mod) => mod.CodeBlock),
  { ssr: false }
);

const MessageItem = (props) => {
  const { message } = props;

  return (
    <Box py={{ base: 5, sm: 6 }} px={{ base: 4, sm: 0 }}>
      {message.type === "link" ? (
        <Link
          display="block"
          fontSize="sm"
          fontWeight="medium"
          textColor="purple.600"
          isTruncated
          isExternal
          href={message.url}
        >
          {message.url}
        </Link>
      ) : (
        <CodeBlock
          language={message.language}
          codeString={message.code_string}
        />
      )}
      <Flex mt={2} alignItems="center" fontSize="sm" textColor="gray.500">
        <Icon
          as={CalendarIcon}
          mr={1.5}
          width={5}
          height={5}
          flexShrink={0}
          textColor="gray.400"
          aria-hidden="true"
        />
        {formatDate(message.inserted_at)}
      </Flex>
    </Box>
  );
};

export const MessageList = (props) => {
  const { messages } = props;

  return (
    <List as="ol">
      {messages.map((message) => (
        <ListItem
          key={message.id}
          _notFirst={{
            borderTopWidth: 1,
            borderTopColor: "gray.200",
          }}
        >
          <MessageItem message={message} />
        </ListItem>
      ))}
    </List>
  );
};
