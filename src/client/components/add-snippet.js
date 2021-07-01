import {
  Box,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Select,
} from "@chakra-ui/react";

export const AddSnippet = () => {
  return (
    <Stack as="form" spacing={6}>
      <FormControl>
        <FormLabel fontSize="sm" fontWeight="medium" textColor="gray.700">
          Language
        </FormLabel>
        <Select
          _focus={{
            outline: "none",
            borderColor: "purple.400",
            ring: "1px",
            ringColor: "purple.400",
          }}
        >
          <option value="javascript">JavaScript</option>
          <option value="jsx">JSX</option>
          <option value="ruby">Ruby</option>
          <option value="python">Python</option>
          <option value="typescript">TypeScript</option>
          <option value="tsx">TSX</option>
          <option value="java">Java</option>
          <option value="css">CSS</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel fontSize="sm" fontWeight="medium" textColor="gray.700">
          Code Snippet
        </FormLabel>
        <Textarea
          display="block"
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
            Add snippet
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};
