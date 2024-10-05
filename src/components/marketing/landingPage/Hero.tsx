"use client";

import React from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { heroConfig } from "@/config/site";
import image from "@/assets/images/datacenter.jpg";
import NextImage from "next/image";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";
import BlurFade from "@/components/ui/blur-fade";

const HeroSection = () => {
  return (
    <Box as="section" overflow="hidden">
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, sm: 6, lg: 8 }}
        py={{ base: 12, md: 16 }}
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
      >
        <VStack
          spacing={6}
          align={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          maxW={{ base: "100%", lg: "50%" }}
          mb={{ base: 12, lg: 0 }}
        >
          <BlurFade delay={0.25} inView>
            <Heading
              as="h1"
              size="3xl"
              color="yellow.500"
              fontWeight="bold"
              lineHeight="shorter"
            >
              {heroConfig.heading}
            </Heading>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <Text fontSize="xl" mb={6}>
              {heroConfig.subheading}
            </Text>
            <RainbowButton>
              <Link href="#services">Discover Our Services</Link>
            </RainbowButton>
          </BlurFade>
        </VStack>

        <Box
          maxW={{ base: "100%", lg: "45%" }}
          h={{ base: "300px", md: "400px" }}
        >
          <BlurFade delay={0.75} inView>
            <NextImage
              src={image}
              alt="Small business technology"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "8px",
              }}
            />
          </BlurFade>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
