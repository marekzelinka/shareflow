import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

export const CreateRoom = () => {
  return (
    <Stack as="form" spacing={6}>
      <FormControl>
        <FormLabel fontSize="sm" fontWeight="medium" textColor="gray.700">
          Your name
        </FormLabel>
        <Input
          _focus={{
            outline: "none",
            borderColor: "purple.400",
            ring: "1px",
            ringColor: "purple.400",
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="sm" fontWeight="medium" textColor="gray.700">
          Room title
        </FormLabel>
        <Input
          _focus={{
            outline: "none",
            borderColor: "purple.400",
            ring: "1px",
            ringColor: "purple.400",
          }}
        />
      </FormControl>
      <Box>
        <Button
          colorScheme="purple"
          isFullWidth
          fontSize="sm"
          fontWeight="medium"
          _focus={{
            outline: "none",
            ring: "2px",
            ringOffset: "2px",
            ringColor: "purple.400",
          }}
        >
          Create room
        </Button>
      </Box>
    </Stack>
  );
};
