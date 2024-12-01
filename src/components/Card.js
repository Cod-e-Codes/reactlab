import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg="white"
      maxWidth="400px"
      _hover={{ boxShadow: "2xl", transform: "scale(1.05)", transition: "0.3s" }}
      transition="all 0.3s ease"
    >
      <Image src={imageSrc} alt={title} objectFit="cover" width="100%" height="200px" />

      <VStack align="flex-start" p={4} spacing={3}>
        {/* Title */}
        <Heading as="h3" size="md" color="teal.600">
          {title}
        </Heading>

        {/* Description */}
        <Text fontSize="sm" color="gray.700">
          {description}
        </Text>

        {/* Arrow Icon */}
        <HStack spacing={2} alignItems="center">
          <Text fontSize="sm" color="teal.500" fontWeight="bold">
            Learn More
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#38B2AC" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
