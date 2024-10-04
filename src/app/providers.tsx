"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme={"dark"}>
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </ChakraProvider>
  );
}
