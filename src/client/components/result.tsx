import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  AlertProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface ResultProps {
  title: string;
  description: string;
  status: AlertProps["status"];
  children?: ReactNode;
}

export const Result = ({
  title,
  description,
  status,
  children,
}: ResultProps) => (
  <Alert
    status={status}
    variant="subtle"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    pt={10}
    pb={8}
    rounded="lg"
  >
    <AlertIcon boxSize={10} mr={0} />
    <AlertTitle mt={6} mb={1} fontSize="lg">
      {title}
    </AlertTitle>
    <AlertDescription maxWidth="sm">{description}</AlertDescription>
    {children !== undefined ? <Box mt={8}>{children}</Box> : null}
  </Alert>
);
