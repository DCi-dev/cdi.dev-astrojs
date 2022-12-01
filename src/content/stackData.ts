import type { Stack } from "@lib/types/index";

const system: Stack = {
  title: "System",
  data: [
    {
      name: "VSCode",
      description: "Primary Code editor",
      icon: "akar-icons:vscode-fill",
      url: "https://code.visualstudio.com/download",
    },
    {
      name: "Hyper",
      description: "Terminal",
      icon: "simple-icons:hyper",
      url: "https://hyper.is/",
    },
    {
      name: "Windows",
      description: "Operating System",
      icon: "mdi:microsoft-windows",
      url: "https://www.microsoft.com/software-download/",
    },
    {
      name: "Chrome",
      description: "Primary Browser",
      icon: "ion:logo-chrome",
      url: "https://www.google.com/chrome",
    },
    {
      name: "Firefox",
      description: "Secondary Browser",
      icon: "ion:logo-firefox",
      url: "https://www.mozilla.org/firefox/",
    },
    {
      name: "Brave",
      description: "Secondary Browser",
      icon: "simple-icons:brave",
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
      icon: "mdi:react",
      url: "https://reactjs.org/",
    },
    {
      name: "Next.js",
      description: "Primary Web Development Framework",
      icon: "akar-icons:nextjs-fill",
      url: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      description: "For styling the fron-end",
      icon: "simple-icons:tailwindcss",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Vercel",
      description: "Hosting for Projects",
      icon: "simple-icons:vercel",
      url: "https://vercel.com/",
    },

    {
      name: "Netlify",
      description: "Hosting for Projects",
      icon: "simple-icons:netlify",
      url: "https://www.netlify.com/",
    },
    {
      name: "Prettier",
      description: "For Code formatting",
      icon: "simple-icons:prettier",
      url: "https://prettier.io/",
    },
    {
      name: "Eslint",
      description: "For Code linting",
      icon: "simple-icons:eslint",
      url: "https://eslint.org/",
    },
    {
      name: "Git",
      description: "Version Control",
      icon: "mdi:git",
      url: "https://git-scm.com/downloads",
    },
    {
      name: "Github",
      description: "For Storing and Managing Projects",
      icon: "uiw:github",
      url: "https://github.com/",
    },
    {
      name: "pnpm",
      description: "Primary Package Manager",
      icon: "simple-icons:pnpm",
      url: "https://pnpm.io/",
    },
    {
      name: "npm",
      description: "Alternative Package Manager",
      icon: "ion:logo-npm",
      url: "https://classic.yarnpkg.com/lang/en/docs/install/",
    },
    {
      name: "Figma",
      description: "Primary Design tool",
      icon: "akar-icons:figma-fill",
      url: "https://www.figma.com/downloads/",
    },
    {
      name: "Canva",
      description: "Secondary Design tool",
      icon: "simple-icons:canva",
      url: "https://www.canva.com/",
    },
    {
      name: "Insomnia",
      description: "For testing APIs",
      icon: "simple-icons:insomnia",
      url: "https://insomnia.rest/download",
    },
    {
      name: "Snyk",
      description: "Find and fix vulnerabilities",
      icon: "simple-icons:snyk",
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
      icon: "simple-icons:bitwarden",
      url: "https://bitwarden.com/",
    },
    {
      name: "Proton Mail",
      description: "Email Service",
      icon: "simple-icons:protonmail",
      url: "https://proton.me/mail",
    },
    {
      name: "Proton VPN",
      description: "VPN Service",
      icon: "simple-icons:protonvpn",
      url: "https://protonvpn.com/",
    },
    {
      name: "SimpleLogin",
      description: "Email aliases",
      icon: "simplelogin",
      url: "https://simplelogin.io/",
    },
    {
      name: "Yubico",
      description: "Hardware Security Key",
      icon: "yubico",
      url: "https://www.yubico.com/",
    },
    {
      name: "Discord",
      description: "For communication",
      icon: "akar-icons:discord-fill",
      url: "https://discord.com/",
    },
    {
      name: "Session",
      description: "For communication",
      icon: "session",
      url: "https://getsession.org/",
    },
    {
      name: "Grammarly",
      description: "Typing assistant that reviews spelling, grammar, etc.",
      icon: "simple-icons:grammarly",
      url: "https://www.grammarly.com/",
    },
    {
      name: "Notion",
      description: "Note taking and organizing",
      icon: "simple-icons:notion",
      url: "https://www.grammarly.com/",
    },
    {
      name: "Everything Search",
      description: "For quick searching in Windows",
      icon: "fa-solid:search",
      url: "https://www.voidtools.com/downloads/",
    },
    {
      name: "Flameshot",
      description: "Screen capture",
      icon: "flameshot",
      url: "https://flameshot.org",
    },
  ],
};

const stack: Stack[] = [system, tools, software];

export default stack;
