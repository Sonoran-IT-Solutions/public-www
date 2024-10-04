import { introduction } from "@/config/site";
import { Image } from "@nextui-org/react";
import { title } from "@/components/primitives";

export default function Introduction() {
  return (
    <section id={"hero"}>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="sm:text-lg ">
          <h2 className={title()}>{introduction.title}</h2>
          <p className="mb-4 text-center md:text-left w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full">
            {introduction.content}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            isZoomed
            isBlurred
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <Image
            isZoomed
            isBlurred
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
