import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const emptyIcon = (
  <Icon
    viewBox="0 0 647.64 632.17"
    height={20}
    width="auto"
    mx="auto"
    display="block"
  >
    <path
      fill="#f2f2f2"
      d="M411.15 142.17H236.64a15.02 15.02 0 00-15 15v387.85l-2 .61-42.81 13.11a8 8 0 01-10-5.3L39.5 137.47a8 8 0 015.3-9.99l65.98-20.2 191.25-58.54L368 28.55a7.99 7.99 0 019.99 5.3l32.55 106.32z"
    />
    <path
      fill="#3f3d56"
      d="M449.23 140.17L410 12.03A17 17 0 00388.77.75l-92.75 28.4-191.24 58.54-92.75 28.4A17.02 17.02 0 00.75 137.32l134.08 437.93a17.03 17.03 0 0016.26 12.03 16.79 16.79 0 004.97-.75l63.58-19.46 2-.62v-2.09l-2 .61-64.17 19.65a15.01 15.01 0 01-18.73-9.95L2.67 136.73A14.98 14.98 0 0112.62 118l92.75-28.4L296.6 31.06l92.75-28.4a15.16 15.16 0 014.4-.66 15.01 15.01 0 0114.33 10.61l39.05 127.56.62 2h2.08z"
    />
    <path
      fill="#6c63ff"
      d="M122.68 127.82a9.02 9.02 0 01-8.61-6.37l-12.88-42.07a9 9 0 015.97-11.24L283.1 14.28a9 9 0 0111.24 5.97l12.88 42.07a9.01 9.01 0 01-5.97 11.24l-175.94 53.87a8.98 8.98 0 01-2.63.4z"
    />
    <circle cx="190.15" cy="24.95" r="20" fill="#6c63ff" />
    <circle cx="190.15" cy="24.95" r="12.66" fill="#fff" />
    <path
      fill="#e6e6e6"
      d="M602.64 582.17h-338a8.51 8.51 0 01-8.5-8.5v-405a8.51 8.51 0 018.5-8.5h338a8.51 8.51 0 018.5 8.5v405a8.51 8.51 0 01-8.5 8.5z"
    />
    <path
      fill="#3f3d56"
      d="M447.14 140.17h-210.5a17.02 17.02 0 00-17 17v407.8l2-.6v-407.2a15.02 15.02 0 0115-15h211.12zm183.5 0h-394a17.02 17.02 0 00-17 17v458a17.02 17.02 0 0017 17h394a17.02 17.02 0 0017-17v-458a17.02 17.02 0 00-17-17zm15 475a15.02 15.02 0 01-15 15h-394a15.02 15.02 0 01-15-15v-458a15.02 15.02 0 0115-15h394a15.02 15.02 0 0115 15z"
    />
    <path
      fill="#6c63ff"
      d="M525.64 184.17h-184a9.01 9.01 0 01-9-9v-44a9.01 9.01 0 019-9h184a9.01 9.01 0 019 9v44a9.01 9.01 0 01-9 9z"
    />
    <circle cx="433.64" cy="105.17" r="20" fill="#6c63ff" />
    <circle cx="433.64" cy="105.17" r="12.18" fill="#fff" />
  </Icon>
);

interface EmptyProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export const Empty = ({ title, description, children }: EmptyProps) => (
  <Box pt={10} pb={8} textAlign="center">
    {emptyIcon}
    <Heading as="h3" mt={6} size="md" fontWeight="bold" textColor="gray.900">
      {title}
    </Heading>
    <Text mt={1} fontSize="sm" textColor="gray.500">
      {description}
    </Text>
    {children !== undefined ? <Box mt={8}>{children}</Box> : null}
  </Box>
);
