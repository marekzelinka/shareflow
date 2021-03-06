import {
  Box,
  Button,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Select,
  Textarea,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { ExclamationCircleIcon, PlusIcon } from "@heroicons/react/solid";
import { Formik, FormikErrors, FormikHelpers } from "formik";
import { useCreateMessageMutation } from "../hooks/use-create-message-mutation";
import { isValidUrl } from "../utils/is-valid-url";
import { NewMessage } from "../types";

type Values = NewMessage;

const initialValues: Values = {
  type: "link",
  url: "",
  language: "javascript",
  code_string: "",
};

const validate = (values: Values) => {
  const errors: FormikErrors<Values> = {};
  if (
    values.type === "link" &&
    values.url !== undefined &&
    !isValidUrl(values.url.trim())
  ) {
    errors.url = "Invalid URL!";
  }
  if (
    values.type === "snippet" &&
    values.code_string !== undefined &&
    values.code_string.trim().length === 0
  ) {
    errors.code_string = "Required";
  }
  return errors;
};

interface AddRoomMessageProps {
  roomId: string;
}

export const AddRoomMessage = ({ roomId }: AddRoomMessageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const createMessageResult = useCreateMessageMutation();

  const handleSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    createMessageResult.mutate(
      { roomId, values },
      {
        onSuccess: () => {
          onClose();
        },
        onError: () => {
          toast({
            title: "Uh oh! Something went wrong :(",
            description:
              "An error occurred while adding a new message. Please try again.",
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
    <Box>
      <Button
        onClick={onOpen}
        colorScheme="green"
        leftIcon={<Icon as={PlusIcon} height={5} width={5} />}
      >
        Add message
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent overflow="hidden">
          <ModalHeader>New Message</ModalHeader>
          <ModalCloseButton />
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
              <>
                <ModalBody minHeight="311px">
                  <form id="new-room-message-form" onSubmit={handleSubmit}>
                    <Stack spacing={6}>
                      <FormControl>
                        <FormLabel>Type</FormLabel>
                        <RadioGroup
                          colorScheme="green"
                          name="type"
                          value={values.type}
                        >
                          <Stack direction="row" spacing={3}>
                            <Radio
                              value="link"
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
                          isInvalid={errors.url !== undefined && touched.url}
                        >
                          <FormLabel>URL</FormLabel>
                          <Input
                            name="url"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.url}
                          />
                          <FormErrorMessage>
                            <Icon
                              as={ExclamationCircleIcon}
                              mr={1.5}
                              height={5}
                              width={5}
                              flexShrink={0}
                              textColor="red.400"
                              aria-hidden="true"
                            />
                            {errors.url}
                          </FormErrorMessage>
                        </FormControl>
                      ) : (
                        <>
                          <FormControl>
                            <FormLabel>Language</FormLabel>
                            <Select
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
                            isInvalid={
                              errors.code_string !== undefined &&
                              touched.code_string
                            }
                          >
                            <FormLabel>Code Snippet</FormLabel>
                            <Textarea
                              display="block"
                              name="code_string"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.code_string}
                            />
                            <FormErrorMessage>
                              <Icon
                                as={ExclamationCircleIcon}
                                mr={1.5}
                                height={5}
                                width={5}
                                flexShrink={0}
                                textColor="red.400"
                                aria-hidden="true"
                              />
                              {errors.code_string}
                            </FormErrorMessage>
                          </FormControl>
                        </>
                      )}
                    </Stack>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Stack spacing={4} direction="row">
                    <Button variant="outline" onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      form="new-room-message-form"
                      colorScheme="green"
                      isLoading={isSubmitting}
                      loadingText="Adding message. Please wait..."
                    >
                      Save
                    </Button>
                  </Stack>
                </ModalFooter>
              </>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </Box>
  );
};
