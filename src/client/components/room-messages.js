import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { MessageList } from "./message-list";

export const RoomMessages = (props) => {
  const { messages } = props;

  const links = messages.filter((message) => message.type === "link");
  const snippets = messages.filter((message) => message.type === "snippet");

  return (
    <Tabs as="section">
      <Box as="header" borderBottomWidth={1} borderTopColor="gray.200">
        <Box
          px={{ base: 4, sm: 0 }}
          display={{ sm: "flex" }}
          alignItems={{ sm: "baseline" }}
        >
          <Heading as="h2" size="md" fontWeight="medium" textColor="gray.900">
            Previous messages
          </Heading>
          <TabList
            mt={{ base: 4, sm: 0 }}
            mb="-1px"
            ml={{ sm: 10 }}
            borderBottomWidth={0}
          >
            <Tab
              mb={0}
              pt={0}
              pb={4}
              px={1}
              fontSize="sm"
              fontWeight="medium"
              textColor="gray.500"
              whiteSpace="nowrap"
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
              fontSize="sm"
              fontWeight="medium"
              textColor="gray.500"
              whiteSpace="nowrap"
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
              Links
            </Tab>
            <Tab
              mb={0}
              ml={8}
              pt={0}
              pb={4}
              px={1}
              fontSize="sm"
              fontWeight="medium"
              textColor="gray.500"
              whiteSpace="nowrap"
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
              Snippets
            </Tab>
          </TabList>
        </Box>
      </Box>
      <TabPanels>
        <TabPanel p={0}>
          <MessageList messages={messages} />
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
