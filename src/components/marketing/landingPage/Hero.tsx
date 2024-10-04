"use client";
import React from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Button } from "@nextui-org/react";
import { heroConfig } from "@/config/site";
import image from "@/assets/images/datacenter.jpg";
import NextImage from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center py-4">
      <Box as="section" className={"py-8"} minH={{ base: "100vh", md: "80vh" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          maxW="7xl"
          mx="auto"
          px={{ base: 4, sm: 6, lg: 8 }}
          py={{ base: 12, md: 16 }}
          h="100%"
        >
          {/* Text Content */}
          <VStack
            spacing={6}
            align={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
            maxW={{ base: "100%", md: "50%" }}
            mb={{ base: 12, md: 0 }}
          >
            <Heading
              as="h1"
              size="3xl"
              color="yellow.500"
              fontWeight="bold"
              lineHeight="shorter"
            >
              {heroConfig.heading}
            </Heading>
            <Text fontSize="xl">{heroConfig.subheading}</Text>
            <Button
              color={"primary"}
              radius={"full"}
              variant={"shadow"}
              as={Link}
              href={"#services"}
            >
              Discover Our Services
            </Button>
          </VStack>

          {/* Image */}
          <Box
            maxW={{ base: "100%", md: "45%" }}
            h={{ base: "300px", md: "400px", lg: "500px" }}
          >
            <NextImage
              src={image}
              alt="Small business technology"
              className="object-contain shadow-lg rounded-large "
            />
          </Box>
        </Flex>
      </Box>
    </section>
  );
};

export default HeroSection;
