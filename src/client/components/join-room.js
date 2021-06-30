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

export const JoinRoom = () => {
  return (
    <Formik
      initialValues={{ id: "" }}
      validateOnBlur={false}
      validate={(values) => {
        const errors = {};
        if (values.id.trim().length === 0) {
          errors.id = "Required";
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
          <FormControl isInvalid={errors.id !== undefined && touched.id}>
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
              name="id"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.id}
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
              {errors.id}
            </FormErrorMessage>
          </FormControl>
          <Box>
            <Button
              type="submit"
              colorScheme="purple"
              isFullWidth
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
                  as={PlusCircleIcon}
                  width={5}
                  height={5}
                  textColor="purple.200"
                  aria-hidden="true"
                />
              }
              isLoading={isSubmitting}
              loadingText="Joining room. Please wait..."
            >
              Join room
            </Button>
          </Box>
        </Stack>
      )}
    </Formik>
  );
};
