"use client";
import React from "react";
import { heroConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import NextImage from "next/image";
import heroImage from "@/assets/images/hero.jpg";

import { Button } from "@nextui-org/react";
export default function Hero() {
  return (
    <section className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
      <div className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
        <div className="text-center leading-8 md:leading-10 md:text-left">
          <div className="inline-block">
            <h1 className={title()}>Empowering Your Business with&nbsp;</h1>
            <h1 className={title({ color: "green" })}>IT Solutions&nbsp;</h1>
          </div>
        </div>
        <h2
          className={subtitle({
            fullWidth: true,
            class: "text-center md:text-left",
          })}
        >
          {heroConfig.subheading}
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button color={"primary"} radius={"full"} variant={"shadow"}>
            Discover Our Services
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex flex-col relative z-20 w-1/2 px-6">
        <NextImage
          alt="Stock Photo of a Laptop on a Desk"
          className="rounded-xl  shadow-xl"
          src={heroImage}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </section>
  );
}
