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
import { Formik, FormikErrors, FormikHelpers } from "formik";
import { ExclamationCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { generateSlug, slugify } from "client/utils/helpers";
import { useCreateRoomMutation } from "client/utils/hooks";
import { NewRoom } from "client/utils/types";

type Values = NewRoom;

const initialValues: Values = { slug: generateSlug(), title: "", host: "" };

const validate = (values: Values) => {
  const errors: FormikErrors<Values> = {};
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

  const handleSubmit = (
    values: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>
  ) => {
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
        <form onSubmit={handleSubmit}>
          <Stack spacing={6}>
            <FormControl isInvalid={errors.slug !== undefined && touched.slug}>
              <FormLabel>Room ID</FormLabel>
              <Input
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
            <FormControl
              isInvalid={errors.title !== undefined && touched.title}
            >
              <FormLabel>Title</FormLabel>
              <Input
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
              <FormLabel>Host</FormLabel>
              <Input
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
                leftIcon={
                  <Icon
                    as={PlusCircleIcon}
                    width={5}
                    height={5}
                    textColor="purple.200"
                  />
                }
                isLoading={isSubmitting}
                loadingText="Creating room. Please wait..."
              >
                Create room
              </Button>
            </Box>
          </Stack>
        </form>
      )}
    </Formik>
  );
};
