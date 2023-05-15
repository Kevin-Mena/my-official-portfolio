import React from "react";
import { FaAngellist, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/portfolio",
    text: "portfolio",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/kevin-okoth/",
    text: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/Kevin-Mena",
    text: "Github",
    icon: <BsGithub />,
  },
  {
    id: 3,
    url: "https://wellfound.com/u/kevin-okoth-1",
    text: "WellFound",
    icon: <FaAngellist />,
  },
  {
    id: 4,
    url: "https://twitter.com/Fmenawende",
    text: "Twitter",
    icon: <FaTwitter />,
  },
];
