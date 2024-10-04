import React from "react";
import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Card, CardBody } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services } from "@/config/site";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  name: string;
  icon: IconProp;
  description: string;
}
const ServiceCard = ({ name, icon, description }: Props) => (
  <Card isHoverable isBlurred>
    <CardBody>
      <VStack spacing={4} align="center">
        <Box fontSize="3xl" color="blue.500">
          <FontAwesomeIcon icon={icon} />
        </Box>
        <Heading as="h3" size="md" textAlign="center">
          {name}
        </Heading>
        <Text textAlign="center">{description}</Text>
      </VStack>
    </CardBody>
  </Card>
);

export default function Services() {
  return (
    <Box as="section" py={16}>
      <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
        <Heading as="h2" size="2xl" textAlign="center" mb={12}>
          {services.title}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {services.items.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
