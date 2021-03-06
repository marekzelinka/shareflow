import { Box, Spinner as ChakraSpinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface SpinnerProps {
  tip?: string;
}

export const Spinner = ({ tip = "Loading" }: SpinnerProps) => {
  const [content, setContent] = useState(tip);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContent((content) => {
        if (content === tip + "...") {
          return tip;
        }

        return content + ".";
      });
    }, 300);

    const cleanup = () => {
      clearInterval(intervalId);
    };

    return cleanup;
  }, [tip]);

  return (
    <Box textAlign="center">
      <ChakraSpinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
      <Text
        as="div"
        mt={6}
        fontSize="md"
        fontWeight="bold"
        textColor="gray.500"
      >
        {content}
      </Text>
    </Box>
  );
};
