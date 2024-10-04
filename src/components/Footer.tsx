import { Logo } from "@/components/Logo";
import { Button, Link } from "@nextui-org/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
export const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-6 sm:px-8 lg:px-10 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
        <div>
          <Link href={"/"} className={"gap-2"}>
            <Logo />
            <span className={"font-semibold text-yellow-500"}>
              Sonoran IT Solutions, LLC.
            </span>
          </Link>
        </div>

        <ul className="text-center">
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
            <a
              className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="/about"
            >
              About
            </a>
          </li>
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
            <a
              className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="/services"
            >
              Services
            </a>
          </li>
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
            <a
              className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="md:text-end space-x-2">
          <Button
            variant="light"
            as={Link}
            href="https://github.com/Sonoran-IT-Solutions"
            isIconOnly={true}
            isExternal={true}
          >
            <GitHubLogoIcon />
          </Button>
        </div>
      </div>
    </footer>
  );
};
