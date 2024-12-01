import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  // Formik setup
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      type: Yup.string().required("Type of enquiry is required"),
      comment: Yup.string().required("Comment is required"),
    }),
    onSubmit: (values) => {
      // Call the submit function from useSubmit
      submit(values)
        .then((res) => {
          if (res.type === "success") {
            onOpen({
              status: "success",
              title: `Success`,
              description: `Thank you, ${values.firstName}, for your message!`,
            });
            formik.resetForm();
          } else {
            onOpen({
              status: "error",
              title: `Error`,
              description: `Something went wrong. Please try again later.`,
            });
          }
        })
        .catch((err) => {
          onOpen({
            status: "error",
            title: `Error`,
            description: `Something went wrong. Please try again later.`,
          });
        });
    },
  });

  // Rendering the form
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section" color="gray.100">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%" bg="white">
          <form onSubmit={formik.handleSubmit}>
            {/* First Name */}
            <FormControl
              isInvalid={formik.touched.firstName && formik.errors.firstName}
            >
              <FormLabel htmlFor="firstName" color="gray.600">
                First Name
              </FormLabel>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                {...formik.getFieldProps("firstName")}
                color="gray.800"  // Input text color
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>

            {/* Email */}
            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
              <FormLabel htmlFor="email" color="gray.600">
                Email
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps("email")}
                color="gray.800"  // Input text color
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            {/* Type of enquiry */}
            <FormControl isInvalid={formik.touched.type && formik.errors.type}>
              <FormLabel htmlFor="type" color="gray.600">
                Type of Enquiry
              </FormLabel>
              <Select
                id="type"
                name="type"
                {...formik.getFieldProps("type")}
                color="gray.800"  // Input text color
              >
                <option value="">Select an option</option>
                <option value="general">General</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </Select>
              <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
            </FormControl>

            {/* Comment */}
            <FormControl
              isInvalid={formik.touched.comment && formik.errors.comment}
            >
              <FormLabel htmlFor="comment" color="gray.600">
                Comment
              </FormLabel>
              <Textarea
                id="comment"
                name="comment"
                {...formik.getFieldProps("comment")}
                color="gray.800"  // Input text color
              />
              <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>

            {/* Submit Button */}
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isLoading}
              type="submit"
              w="full"
            >
              Submit
            </Button>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
