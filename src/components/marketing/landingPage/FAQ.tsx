"use client";

import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { faqs } from "@/content/faq";
import { XIcon, PlusIcon, X } from "lucide-react";

const FAQSection = () => {
  return (
    <Box as="section" py={16}>
      <Flex
        maxW="7xl"
        mx="auto"
        px={4}
        direction={{ base: "column", md: "row" }}
      >
        <Box flex={1} mb={{ base: 8, md: 0 }} pr={{ base: 0, md: 8 }}>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            lineHeight="1.2"
            color={"yellow.500"}
          >
            Frequently asked questions
          </Text>
        </Box>
        <Box flex={2}>
          <Accordion
            className="custom-accordion"
            selectionMode="single"
            variant="bordered"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                aria-label={faq.question}
                indicator={({ isOpen }) => (isOpen ? <XIcon /> : <PlusIcon />)}
                title={<Text fontWeight="medium">{faq.question}</Text>}
              >
                <Text>{faq.answer}</Text>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
};

export default FAQSection;
