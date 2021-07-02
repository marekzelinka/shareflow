import { Box, Spinner as ChakraSpinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Spinner = (props) => {
  const { tip = "Loading" } = props;

  const [content, setContent] = useState(tip);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContent((c) => {
        if (c === tip + "...") {
          return tip;
        }

        return c + ".";
      });
    }, 300);

    const cleanup = () => {
      clearInterval(intervalId);
    };
    return cleanup;
  }, [tip]);

  return (
    <Box pt={10} pb={8} textAlign="center">
      <ChakraSpinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="purple.500"
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
