import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} textAlign="center">
      {/* Avatar */}
      <Avatar
        size="xl"
        name="Pete"
        src="https://i.pravatar.cc/150?img=7"
        mb={4}  // Margin below the avatar
      />

      {/* Greeting */}
      <Heading color="white">{greeting}</Heading>

      {/* Bio */}
      <Text color="white" fontSize="lg">
        {bio1}
      </Text>
      <Text color="white" fontSize="lg">
        {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
