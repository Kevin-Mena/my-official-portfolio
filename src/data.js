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

export const data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "maria ferguson",
    title: "office manager",
    descr:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "john doe",
    title: "regular guy",
    descr:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    name: "peter smith",
    title: "product designer",
    descr:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "susan andersen",
    title: "the boss",
    descr:
      "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ",
  },
];
