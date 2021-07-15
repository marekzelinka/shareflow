import { Flex, Box, Text, Divider as ChakraDivider } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DividerProps {
  children?: ReactNode;
}

export const Divider = ({ children }: DividerProps) => (
  <Box position="relative">
    <Flex position="absolute" inset="0" alignItems="center">
      <ChakraDivider borderColor="gray.300" />
    </Flex>
    {children !== undefined ? (
      <Flex position="relative" justifyContent="center" fontSize="sm">
        <Text as="span" px={2} backgroundColor="white" textColor="gray.500">
          {children}
        </Text>
      </Flex>
    ) : null}
  </Box>
);
