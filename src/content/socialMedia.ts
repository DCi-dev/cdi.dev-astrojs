import { Social } from "@/lib/types";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const socialLinks: Social = {
  title: "Social Links",
  data: [
    {
      name: "Github",
      Icon: BsGithub,
      description: "My Github profile",
      url: "https://github.com/DCi-dev",
    },
    {
      name: "LinkedIn",
      Icon: BsLinkedin,
      description: "My LinkedIn profile",
      url: "https://www.linkedin.com/in/dan-cristian-ilie/",
    },
    {
      name: "Discord",
      Icon: BsDiscord,
      description: "My Discord profile",
      url: "https://discord.com/users/CDi#4953",
    },
    {
      name: "Email",
      Icon: MdMail,
      description: "My Email address",
      url: "mailto:contact@cdi.dev",
    },
  ],
};

export default socialLinks;
