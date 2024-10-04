import { heroConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export default function Hero() {
  return (
    <section
      id={"hero"}
      className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]"
    >
      <div className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
        <div className="text-center leading-8 md:leading-10 md:text-left">
          <div className="inline-block">
            <h1 className={title()}>Empowering Your Business with&nbsp;</h1>
            <h1 className={title({ color: "green" })}>IT Solutions&nbsp;</h1>
          </div>
          <h1 className={title()}>that work.</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            {heroConfig.subheading}
          </h2>
        </div>

        <div className="flex gap-3">
          <Button color={"primary"} radius={"full"} variant={"shadow"}>
            Discover Our Services
          </Button>
        </div>
      </div>
      <Image
        isBlurred
        width={"500"}
        src={
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </section>
  );
}
