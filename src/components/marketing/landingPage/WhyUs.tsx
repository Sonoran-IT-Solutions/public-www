import React from "react";
import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faTools,
  faPiggyBank,
  faShieldAlt,
  faClock,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody } from "@nextui-org/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const reasons = [
  {
    icon: faUserTie,
    title: "Small Business Specialists",
    description:
      "We understand the unique challenges and needs of small businesses.",
  },
  {
    icon: faTools,
    title: "Comprehensive Services",
    description:
      "From day-to-day support to strategic planning, we've got you covered.",
  },
  {
    icon: faPiggyBank,
    title: "Cost-Effective Solutions",
    description: "Enterprise-level IT support tailored to fit your budget.",
  },
  {
    icon: faShieldAlt,
    title: "Security Focused",
    description: "We prioritize your data security and compliance needs.",
  },
  {
    icon: faClock,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance to keep your business running smoothly.",
  },
  {
    icon: faChartLine,
    title: "Scalable Solutions",
    description:
      "Our services grow with your business, supporting you at every stage.",
  },
];

interface Props {
  title: string;
  icon: IconProp;
  description: string;
}

const ReasonCard = ({ title, icon, description }: Props) => (
  <Card isHoverable isBlurred>
    <CardBody>
      <VStack spacing={4} align="center">
        <Box fontSize="3xl" color="yellow.500">
          <FontAwesomeIcon icon={icon} />
        </Box>
        <Heading as="h3" size="md" textAlign="center">
          {title}
        </Heading>
        <Text textAlign="center">{description}</Text>
      </VStack>
    </CardBody>
  </Card>
);

const WhyChooseUsSection = () => {
  return (
    <Box as="section" py={16}>
      <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          mb={12}
          color="yellow.500"
        >
          Why Choose Sonoran IT Solutions?
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WhyChooseUsSection;
