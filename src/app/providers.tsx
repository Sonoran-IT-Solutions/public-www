"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ChakraProvider>
        <ThemeProvider attribute="class" defaultTheme={"dark"}>
          {children}
        </ThemeProvider>
      </ChakraProvider>
    </NextUIProvider>
  );
}
