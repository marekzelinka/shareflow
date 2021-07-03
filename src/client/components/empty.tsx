import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface EmptyProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export const Empty = ({ title, description, children }: EmptyProps) => (
  <Box pt={10} pb={8} textAlign="center">
    <Image height={20} width="auto" mx="auto" src="/empty.svg" alt="" />
    <Heading as="h3" mt={6} size="md" fontWeight="bold" textColor="gray.900">
      {title}
    </Heading>
    <Text mt={1} fontSize="sm" textColor="gray.500">
      {description}
    </Text>
    {children !== undefined ? <Box mt={8}>{children}</Box> : null}
  </Box>
);
