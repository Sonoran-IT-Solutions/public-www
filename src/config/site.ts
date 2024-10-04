export type SiteConfig = typeof siteConfig;
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const siteConfig = {
  name: "Sonoran IT Solutions",
  description: "Phoenix-Valley IT Consulting and Managed Services Provider",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
  ],
  socials: [
    {
      service: "GitHub",
      href: "https://github.com/sonoran-it-solutions",
      icon: GitHubLogoIcon,
    },
  ],
};
