import { Flex, Box, Text, Divider as ChakraDivider } from "@chakra-ui/react";

export const Divider = (props) => {
  const { children } = props;

  return (
    <Box position="relative">
      <Flex position="absolute" inset="0" alignItems="center">
        <ChakraDivider borderColor="gray.300" />
      </Flex>
      <Flex position="relative" justifyContent="center" fontSize="sm">
        <Text as="span" px={2} textColor="gray.500" backgroundColor="white">
          {children}
        </Text>
      </Flex>
    </Box>
  );
};
