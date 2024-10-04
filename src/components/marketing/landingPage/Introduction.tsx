"use client";

import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { introduction } from "@/config/site";
import introImage from "@/assets/images/intro.jpg";

const Introduction = () => {
  return (
    <Box as="section" py={16}>
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, sm: 6, lg: 8 }}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
      >
        <Box flex="1" mr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
          <Heading as="h1" size="2xl" mb={4} color="yellow.500">
            {introduction.title}
          </Heading>
          <Text fontSize="xl" mb={6}>
            {introduction.content}
          </Text>
        </Box>
        <Box flex="1" maxW={{ base: "100%", md: "50%" }}>
          <NextImage
            src={introImage}
            alt="Team collaborating on a project with a laptop in a professional setting"
            className="rounded-xl  shadow-xl"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Introduction;
