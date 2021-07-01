import { Box, Heading, Image, Text } from "@chakra-ui/react";

export const Empty = (props) => {
  const { title, description, children } = props;

  return (
    <Box py={12} textAlign="center">
      <Image height={20} width="auto" mx="auto" src="/empty.svg" alt="" />
      <Heading as="h3" mt={6} size="md" fontWeight="bold" textColor="gray.900">
        {title}
      </Heading>
      <Text mt={2} fontSize="sm" textColor="gray.500">
        {description}
      </Text>
      <Box mt={8}>{children}</Box>
    </Box>
  );
};
