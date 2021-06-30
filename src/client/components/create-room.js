import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Icon,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { ExclamationCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";

export const CreateRoom = () => {
  return (
    <Formik
      initialValues={{ host: "", title: "" }}
      validate={(values) => {
        const errors = {};
        if (values.host.trim().length === 0) {
          errors.host = "Required";
        }
        if (values.title.trim().length < 3) {
          errors.title = "Too short!";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
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
          <FormControl isInvalid={errors.host !== undefined && touched.host}>
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
          <FormControl isInvalid={errors.title !== undefined && touched.title}>
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
