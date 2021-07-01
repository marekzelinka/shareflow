import {
  Box,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Select,
  Textarea,
  FormErrorMessage,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { ExclamationCircleIcon, PlusIcon } from "@heroicons/react/solid";
import { Formik } from "formik";
import { isValidUrl } from "client/utils";
import { useCreateMessageMutation } from "client/hooks";

const initialValues = {
  type: "link",
  url: "",
  lanuage: "javascript",
  codeString: "",
};

const validate = (values) => {
  const errors = {};
  if (values.type === "link" && !isValidUrl(values.url.trim())) {
    errors.url = "Invalid URL!";
  }
  if (values.type === "snippet" && values.codeString.trim().length === 0) {
    errors.codeString = "Required";
  }
  return errors;
};

export const CreateMessage = (props) => {
  const { roomId } = props;

  const toast = useToast();
  const createMessageResult = useCreateMessageMutation();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    createMessageResult.mutate(
      { roomId, values },
      {
        onSuccess: () => {
          resetForm();
          toast({
            title: "Message added.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        },
        onError: () => {
          toast({
            title: "Uh oh! Something went wrong :(",
            description: "An error occurred. Please try again.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        },
        onSettled: () => {
          setSubmitting(false);
        },
      }
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur={false}
      validateOnChange={false}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm,
      }) => (
        <Stack as="form" spacing={6} onSubmit={handleSubmit}>
          <FormControl
            display={{ sm: "grid" }}
            gridTemplateColumns={{ sm: "repeat(3,minmax(0,1fr))" }}
            gridGap={{ sm: 4 }}
            alignItems={{ sm: "center" }}
          >
            <FormLabel
              fontSize="sm"
              fontWeight="medium"
              textColor="gray.700"
              mb={{ base: 2, sm: 0 }}
            >
              Type
            </FormLabel>
            <RadioGroup
              colorScheme="purple"
              gridColumn={{ sm: "span 2/span 2" }}
              name="type"
              value={values.type}
            >
              <Stack direction="row" spacing={3}>
                <Radio
                  value="link"
                  _focus={{
                    outline: "none",
                    ring: "2px",
                    ringOffset: "2px",
                    ringColor: "purple.400",
                  }}
                  name="type"
                  onChange={(e) => {
                    resetForm();
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                >
                  Link
                </Radio>
                <Radio
                  value="snippet"
                  _focus={{
                    outline: "none",
                    ring: "2px",
                    ringOffset: "2px",
                    ringColor: "purple.400",
                  }}
                  name="type"
                  onChange={(e) => {
                    resetForm();
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                >
                  Snippet
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          {values.type === "link" ? (
            <FormControl
              display={{ sm: "grid" }}
              gridTemplateColumns={{ sm: "repeat(3,minmax(0,1fr))" }}
              gridGap={{ sm: 4 }}
              alignItems={{ sm: "start" }}
              isInvalid={errors.url !== undefined && touched.url}
            >
              <FormLabel
                fontSize="sm"
                fontWeight="medium"
                textColor="gray.700"
                mt={{ sm: "1px" }}
                mb={{ base: 2, sm: 0 }}
                pt={{ sm: 2 }}
              >
                URL
              </FormLabel>
              <Box gridColumn={{ sm: "span 2/span 2" }}>
                <Input
                  _focus={{
                    outline: "none",
                    borderColor: "purple.400",
                    ring: "1px",
                    ringColor: "purple.400",
                  }}
                  name="url"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.url}
                />
                <FormErrorMessage>
                  <Icon
                    as={ExclamationCircleIcon}
                    mr={1.5}
                    width={5}
                    height={5}
                    flexShrink={0}
                    textColor="red.400"
                    aria-hidden="true"
                  />
                  {errors.url}
                </FormErrorMessage>
              </Box>
            </FormControl>
          ) : (
            <>
              <FormControl
                display={{ sm: "grid" }}
                gridTemplateColumns={{ sm: "repeat(3,minmax(0,1fr))" }}
                gridGap={{ sm: 4 }}
                alignItems={{ sm: "start" }}
              >
                <FormLabel
                  fontSize="sm"
                  fontWeight="medium"
                  textColor="gray.700"
                  mt={{ sm: "1px" }}
                  mb={{ base: 2, sm: 0 }}
                  pt={{ sm: 2 }}
                >
                  Language
                </FormLabel>
                <Select
                  _focus={{
                    outline: "none",
                    borderColor: "purple.400",
                    ring: "1px",
                    ringColor: "purple.400",
                  }}
                  gridColumn={{ sm: "span 2/span 2" }}
                  name="language"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.language}
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
              <FormControl
                display={{ sm: "grid" }}
                gridTemplateColumns={{ sm: "repeat(3,minmax(0,1fr))" }}
                gridGap={{ sm: 4 }}
                alignItems={{ sm: "start" }}
                isInvalid={
                  errors.codeString !== undefined && touched.codeString
                }
              >
                <FormLabel
                  fontSize="sm"
                  fontWeight="medium"
                  textColor="gray.700"
                  mt={{ sm: "1px" }}
                  mb={{ base: 2, sm: 0 }}
                  pt={{ sm: 2 }}
                >
                  Code Snippet
                </FormLabel>
                <Box gridColumn={{ sm: "span 2/span 2" }}>
                  <Textarea
                    display="block"
                    _focus={{
                      outline: "none",
                      borderColor: "purple.400",
                      ring: "1px",
                      ringColor: "purple.400",
                    }}
                    name="codeString"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.codeString}
                  />
                  <FormErrorMessage>
                    <Icon
                      as={ExclamationCircleIcon}
                      mr={1.5}
                      width={5}
                      height={5}
                      flexShrink={0}
                      textColor="red.400"
                      aria-hidden="true"
                    />
                    {errors.codeString}
                  </FormErrorMessage>
                </Box>
              </FormControl>
            </>
          )}
          <Stack flexDirection="row" justifyContent="flex-end">
            <Box>
              <Button
                type="submit"
                colorScheme="purple"
                fontWeight="medium"
                fontSize="sm"
                _focus={{
                  outline: "none",
                  ring: "2px",
                  ringOffset: "2px",
                  ringColor: "purple.400",
                }}
                leftIcon={
                  <Icon
                    as={PlusIcon}
                    width={5}
                    height={5}
                    textColor="purple.200"
                    aria-hidden="true"
                  />
                }
                isLoading={isSubmitting}
                loadingText="Adding message. Please wait..."
              >
                Add message
              </Button>
            </Box>
          </Stack>
        </Stack>
      )}
    </Formik>
  );
};
