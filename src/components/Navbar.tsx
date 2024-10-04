import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Logo } from "@/components/Logo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-4" href="/">
            <Logo />
            <span className="font-bold text-inherit text-yellow-500">
              Sonoran IT Solutions, LLC
            </span>
          </NextLink>
        </NavbarBrand>
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink color="foreground" href={item.href}>
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitcher />
          <Link
            isExternal
            aria-label="GitHub"
            href="https://github.com/Sonoran-IT-Solutions"
          >
            <GitHubLogoIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href="/contact"
            variant="flat"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
