import { Stack } from "@lib/types/index";
import { FaSearch } from "react-icons/fa";
import {
  SiBitwarden,
  SiBrave,
  SiCanva,
  SiDiscord,
  SiEslint,
  SiFigma,
  SiFirefox,
  SiGit,
  SiGithub,
  SiGooglechrome,
  SiGrammarly,
  SiHyper,
  SiInsomnia,
  SiNetlify,
  SiNextdotjs,
  SiNotion,
  SiNpm,
  SiPnpm,
  SiPrettier,
  SiProtonmail,
  SiProtonvpn,
  SiReact,
  SiSignal,
  SiSnyk,
  SiTailwindcss,
  SiVercel,
  SiVisualstudiocode,
  SiWindows,
} from "react-icons/si";
import SVG from "./SVG/index";

const system: Stack = {
  title: "System",
  data: [
    {
      name: "VSCode",
      description: "Primary Code editor",
      Icon: SiVisualstudiocode,
      url: "https://code.visualstudio.com/download",
    },
    {
      name: "Hyper",
      description: "Terminal",
      Icon: SiHyper,
      url: "https://hyper.is/",
    },
    {
      name: "Windows",
      description: "Operating System",
      Icon: SiWindows,
      url: "https://www.microsoft.com/software-download/",
    },
    {
      name: "Chrome",
      description: "Primary Browser",
      Icon: SiGooglechrome,
      url: "https://www.google.com/chrome",
    },
    {
      name: "Firefox",
      description: "Secondary Browser",
      Icon: SiFirefox,
      url: "https://www.mozilla.org/firefox/",
    },
    {
      name: "Brave",
      description: "Secondary Browser",
      Icon: SiBrave,
      url: "https://brave.com/",
    },
  ],
};
const tools: Stack = {
  title: "Coding Tools",
  data: [
    {
      name: "React.js",
      description: "Primary Front-end library",
      Icon: SiReact,
      url: "https://reactjs.org/",
    },
    {
      name: "Next.js",
      description: "Primary Web Development Framework",
      Icon: SiNextdotjs,
      url: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      description: "For styling the fron-end",
      Icon: SiTailwindcss,
      url: "https://tailwindcss.com/",
    },
    {
      name: "Vercel",
      description: "Hosting for Projects",
      Icon: SiVercel,
      url: "https://vercel.com/",
    },

    {
      name: "Netlify",
      description: "Hosting for Projects",
      Icon: SiNetlify,
      url: "https://www.netlify.com/",
    },
    {
      name: "Prettier",
      description: "For Code formatting",
      Icon: SiPrettier,
      url: "https://prettier.io/",
    },
    {
      name: "Eslint",
      description: "For Code linting",
      Icon: SiEslint,
      url: "https://eslint.org/",
    },
    {
      name: "Git",
      description: "Version Control",
      Icon: SiGit,
      url: "https://git-scm.com/downloads",
    },
    {
      name: "Github",
      description: "For Storing and Managing Projects",
      Icon: SiGithub,
      url: "https://github.com/",
    },
    {
      name: "pnpm",
      description: "Primary Package Manager",
      Icon: SiPnpm,
      url: "https://pnpm.io/",
    },
    {
      name: "npm",
      description: "Alternative Package Manager",
      Icon: SiNpm,
      url: "https://classic.yarnpkg.com/lang/en/docs/install/",
    },
    {
      name: "Figma",
      description: "Primary Design tool",
      Icon: SiFigma,
      url: "https://www.figma.com/downloads/",
    },
    {
      name: "Canva",
      description: "Secondary Design tool",
      Icon: SiCanva,
      url: "https://www.canva.com/",
    },
    {
      name: "Insomnia",
      description: "For testing APIs",
      Icon: SiInsomnia,
      url: "https://insomnia.rest/download",
    },
    {
      name: "Snyk",
      description: "Find and fix vulnerabilities",
      Icon: SiSnyk,
      url: "https://snyk.io/",
    },
  ],
};

const software: Stack = {
  title: "Software/Applications",
  data: [
    {
      name: "Bitwarden",
      description: "Password Manager",
      Icon: SiBitwarden,
      url: "https://bitwarden.com/",
    },
    {
      name: "Proton Mail",
      description: "Email Service",
      Icon: SiProtonmail,
      url: "https://proton.me/mail",
    },
    {
      name: "Proton VPN",
      description: "VPN Service",
      Icon: SiProtonvpn,
      url: "https://protonvpn.com/",
    },
    {
      name: "SimpleLogin",
      description: "Email aliases",
      Icon: SVG.SimpleLogin,
      url: "https://simplelogin.io/",
    },
    {
      name: "Yubico",
      description: "Hardware Security Key",
      Icon: SVG.Yubico,
      url: "https://www.yubico.com/",
    },
    {
      name: "Discord",
      description: "For communication",
      Icon: SiDiscord,
      url: "https://discord.com/",
    },
    {
      name: "Session",
      description: "For communication",
      Icon: SiSignal,
      url: "https://getsession.org/",
    },
    {
      name: "Grammarly",
      description: "Typing assistant that reviews spelling, grammar, etc.",
      Icon: SiGrammarly,
      url: "https://www.grammarly.com/",
    },
    {
      name: "Notion",
      description: "Note taking and organizing",
      Icon: SiNotion,
      url: "https://www.grammarly.com/",
    },
    {
      name: "Everything Search",
      description: "For quick searching in Windows",
      Icon: FaSearch,
      url: "https://www.voidtools.com/downloads/",
    },
    {
      name: "Flameshot",
      description: "Screen capture",
      Icon: SVG.Flameshot,
      url: "https://flameshot.org",
    },
  ],
};

const stack: Stack[] = [system, tools, software];

export default stack;
