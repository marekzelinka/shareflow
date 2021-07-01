import {
  Box,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const AddLink = () => {
  return (
    <Stack as="form" spacing={6}>
      <FormControl>
        <FormLabel fontSize="sm" fontWeight="medium" textColor="gray.700">
          URL
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
      <Stack flexDirection="row" justifyContent="flex-end">
        <Box>
          <Button
            colorScheme="purple"
            fontWeight="medium"
            fontSize="sm"
            _focus={{
              outline: "none",
              ring: "2px",
              ringOffset: "2px",
              ringColor: "purple.400",
            }}
          >
            Add link
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};
