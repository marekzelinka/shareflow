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
import {
  ExclamationCircleIcon,
  PlusIcon,
  CheckIcon,
} from "@heroicons/react/solid";
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

export const AddMessage = (props) => {
  const { roomId } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
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
          onClose();
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
    <Box>
      <Button
        onClick={onOpen}
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
      >
        Add message
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="lg" fontWeight="medium" textColor="gray.900">
            New Message
          </ModalHeader>
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
                <ModalBody minHeight="311px" pb={6}>
                  <Stack
                    as="form"
                    id="new-message-form"
                    spacing={6}
                    onSubmit={handleSubmit}
                  >
                    <FormControl>
                      <FormLabel
                        fontSize="sm"
                        fontWeight="medium"
                        textColor="gray.700"
                      >
                        Type
                      </FormLabel>
                      <RadioGroup
                        colorScheme="purple"
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
                        isInvalid={errors.url !== undefined && touched.url}
                      >
                        <FormLabel
                          fontSize="sm"
                          fontWeight="medium"
                          textColor="gray.700"
                        >
                          URL
                        </FormLabel>
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
                      </FormControl>
                    ) : (
                      <>
                        <FormControl>
                          <FormLabel
                            fontSize="sm"
                            fontWeight="medium"
                            textColor="gray.700"
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
                            errors.codeString !== undefined &&
                            touched.codeString
                          }
                        >
                          <FormLabel
                            fontSize="sm"
                            fontWeight="medium"
                            textColor="gray.700"
                          >
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
                        </FormControl>
                      </>
                    )}
                  </Stack>
                </ModalBody>
                <ModalFooter>
                  <Stack direction="row" spacing={3}>
                    <Button
                      onClick={onClose}
                      fontWeight="medium"
                      fontSize="sm"
                      _focus={{
                        outline: "none",
                        ring: "2px",
                        ringOffset: "2px",
                        ringColor: "purple.400",
                      }}
                    >
                      Close
                    </Button>
                    <Button
                      type="submit"
                      form="new-message-form"
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
                          as={CheckIcon}
                          width={5}
                          height={5}
                          textColor="purple.200"
                          aria-hidden="true"
                        />
                      }
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
