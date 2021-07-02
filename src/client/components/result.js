import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from "@chakra-ui/react";

export const Result = (props) => {
  const { title, description, status, children } = props;

  return (
    <Alert
      status={status}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      pt={6}
      pb={5}
      rounded="md"
    >
      <AlertIcon boxSize={10} mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {title}
      </AlertTitle>
      <AlertDescription maxWidth="sm">{description}</AlertDescription>
      <Box mt={8}>{children}</Box>
    </Alert>
  );
};
