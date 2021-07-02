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
};
