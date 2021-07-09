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
import { useJoinRoomMutation } from "client/utils/hooks";
import { Room } from "client/utils/types";

type Values = Pick<Room, "slug">;

const initialValues: Values = { slug: "" };

const validate = (values: Values) => {
  const errors: FormikErrors<Values> = {};
  if (values.slug.trim().length === 0) {
    errors.slug = "Required";
  }
  return errors;
};

export const JoinRoom = () => {
  const toast = useToast();
  const router = useRouter();
  const joinRoomResult = useJoinRoomMutation();

  const handleSubmit = async (
    values: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>
  ) => {
    joinRoomResult.mutate(
      { values },
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
              "A room with this ID doesn't exist, or an error occurred. Please try again.",
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
            <Box>
              <Button
                type="submit"
                colorScheme="purple"
                isFullWidth
                leftIcon={<Icon as={PlusCircleIcon} width={5} height={5} />}
                isLoading={isSubmitting}
                loadingText="Joining room. Please wait..."
              >
                Join room
              </Button>
            </Box>
          </Stack>
        </form>
      )}
    </Formik>
  );
};
