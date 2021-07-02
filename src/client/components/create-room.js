import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { ExclamationCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { generateSlug, slugify } from "client/utils";
import { useCreateRoomMutation } from "client/hooks";

const initialValues = { slug: generateSlug(), title: "", host: "" };

const validate = (values) => {
  const errors = {};
  if (values.slug.trim().length === 0) {
    errors.slug = "Required";
  }
  if (values.title.trim().length < 3) {
    errors.title = "Too short!";
  }
  if (values.host.trim().length === 0) {
    errors.host = "Required";
  }
  return errors;
};

export const CreateRoom = () => {
  const toast = useToast();
  const router = useRouter();
  const createRoomResult = useCreateRoomMutation();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    createRoomResult.mutate(
      { values: { ...values, slug: slugify(values.slug) } },
      {
        onSuccess: ({ slug }) => {
          resetForm();
          toast({
            title: "Room available. Redirecting...",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          router.push(`/rooms/${slug}`);
        },
        onError: () => {
          toast({
            title: "Uh oh! Something went wrong :(",
            description:
              "Room unavailable or an error occurred. Please try again.",
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
      }) => (
        <Stack as="form" spacing={6} onSubmit={handleSubmit}>
          <FormControl isInvalid={errors.slug !== undefined && touched.slug}>
            <FormLabel fontSize="sm" fontWeight="medium" textColor="gray.700">
              Room ID
            </FormLabel>
            <Input
              _focus={{
                outline: "none",
                borderColor: "purple.400",
                ring: "1px",
                ringColor: "purple.400",
              }}
              name="slug"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.slug}
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
              {errors.slug}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.title !== undefined && touched.title}>
            <FormLabel fontSize="sm" fontWeight="medium" textColor="gray.700">
              Title
            </FormLabel>
            <Input
              _focus={{
                outline: "none",
                borderColor: "purple.400",
                ring: "1px",
                ringColor: "purple.400",
              }}
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
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
              {errors.title}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.host !== undefined && touched.host}>
            <FormLabel fontSize="sm" fontWeight="medium" textColor="gray.700">
              Host
            </FormLabel>
            <Input
              _focus={{
                outline: "none",
                borderColor: "purple.400",
                ring: "1px",
                ringColor: "purple.400",
              }}
              name="host"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.host}
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
              {errors.host}
            </FormErrorMessage>
          </FormControl>
          <Box>
            <Button
              type="submit"
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
              leftIcon={
                <Icon
                  as={PlusCircleIcon}
                  width={5}
                  height={5}
                  textColor="purple.200"
                  aria-hidden="true"
                />
              }
              isLoading={isSubmitting}
              loadingText="Creating room. Please wait..."
            >
              Create room
            </Button>
          </Box>
        </Stack>
      )}
    </Formik>
  );
};
