import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { AddLink } from "./add-link";
import { AddSnippet } from "./add-snippet";

export const AddMessage = () => {
  return (
    <Tabs as="section">
      <Box as="header" borderBottomWidth={1} borderTopColor="gray.200">
        <Box
          px={{ base: 4, sm: 0 }}
          display={{ sm: "flex" }}
          alignItems={{ sm: "baseline" }}
        >
          <Heading as="h2" size="md" fontWeight="medium" textColor="gray.900">
            Add message
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
              New link
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
              New Snippet
            </Tab>
          </TabList>
        </Box>
      </Box>
      <TabPanels
        mt={{ base: 5, sm: 6 }}
        px={{ base: 4, sm: 0 }}
        minHeight="266px"
      >
        <TabPanel p={0}>
          <AddLink />
        </TabPanel>
        <TabPanel p={0}>
          <AddSnippet />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
