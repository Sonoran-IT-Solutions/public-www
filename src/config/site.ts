export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Sonoran IT Solutions",
  description: "Phoenix-Valley IT Consulting and Managed Services Provider",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
  ],
  socials: {
    github: "https://github.com/Sonoran-IT-Solutions",
  },
};

export const heroConfig = {
  subheading:
    "At Sonoran IT Solutions, we specialize in providing essential IT services to small businesses. Whether you're just getting started with formal IT support or looking to optimize your current systems, we offer tailored solutions that keep your business running smoothly and securely. Located near South Mountain in Phoenix, we understand the unique challenges faced by local businesses and are here to help.",
};

export const services = {
  title: "Our Services",
  items: [
    {
      name: "Technology Assessments",
      description:
        "Gain insights into your current technology infrastructure and identify areas for improvement with a detailed, expert analysis.",
    },
    {
      name: "Help Desk Services",
      description:
        "Reliable, around-the-clock technical support to resolve everyday IT issues quickly and efficiently.",
    },
    {
      name: "Systems Management",
      description:
        "From software updates to routine monitoring, we’ll ensure your systems run optimally without the hassle.",
    },
    {
      name: "Desktop Support",
      description:
        "Hardware problems? We provide on-site and remote support to fix any issues with your computers or devices.",
    },
    {
      name: "IT Asset Management",
      description:
        "Keep track of your equipment, software licenses, and more with comprehensive asset management services.",
    },
    {
      name: "Desktop Virtualization",
      description:
        "Enable your team to work from anywhere with secure, cost-effective desktop virtualization solutions.",
    },
    {
      name: "Cloud Services (AWS & GCP)",
      description:
        "Transform your business with the power of cloud technology, offering scalable solutions tailored to your needs.",
    },
    {
      name: "Project Planning & Management",
      description:
        "From concept to completion, we’ll guide your IT projects, ensuring they are delivered on time and on budget.",
    },
    {
      name: "Network & Security Assessments",
      description:
        "Identify vulnerabilities and optimize your network for security and performance, ensuring your business is protected against threats.",
    },
  ],
};

export const introduction = {
  title: "Welcome to Sonoran IT Solutions",
  content:
    "At Sonoran IT Solutions, we know that running a small business means wearing a lot of hats, but worrying about IT shouldn't be one of them. Whether you’re just getting started with technology or trying to make the most of what you already have, we provide reliable, no-nonsense IT support that’s tailor-made for businesses like yours. From non-profits to healthcare clinics, we specialize in helping organizations that might not have had formal IT services before.",
};

export const remoteWork = {
  title: "Empowering Work-from-Home Environments",
  content:
    "We understand the growing need for flexibility in today’s business landscape. Our services are designed to support remote work environments, offering seamless desktop virtualization and cloud-based solutions to keep your team productive from anywhere.",
};
export const aiAndTech = {
  title: "Future-Proofing with AI & Advanced Technologies",
  content:
    "Stay ahead of the competition by leveraging AI and advanced technologies to automate tasks, enhance efficiency, and drive innovation in your business. Our team is equipped to implement cutting-edge solutions that align with your goals.",
};
export const compliance = {
  title: "Compliance & Security",
  content:
    "Worried about compliance? We specialize in ensuring that your IT infrastructure meets regulatory requirements, such as HIPAA for healthcare organizations, so you can focus on your business knowing that sensitive data is protected.",
};
