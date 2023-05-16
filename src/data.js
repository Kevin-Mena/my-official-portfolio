import React from "react";
import { FaAngellist, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import space from "./assets/space.png";
import bookstore from "./assets/bookstore.png";
import world from "./assets/world.png";
import conference from "./assets/conference.png";

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
    image: space,
    name: "Space Traveler's Website",
    source: "https://github.com/Kevin-Mena/react-group-project",
    demo: "https://spacetravellersweb.netlify.app/",
    descr:
      "Space Travelers' Hub is a web application that provides commercial and scientific space travel services using the real live data from the SpaceX API. The application will allow users to book rockets and join selected space missions.",
  },
  {
    id: 2,
    image: bookstore,
    name: "Bookstore App",
    source: "https://github.com/Kevin-Mena/bookstore-app",
    demo: "https://bookstorecms-app.netlify.app/",
    descr:
      "Bookstore app is a simple content management system that allows users to display a list of books,add a book and remove a selected book from the book list",
  },
  {
    id: 3,
    image: world,
    name: "World Countries Info",
    source: "https://github.com/Kevin-Mena/world-countries-info",
    demo: "https://worldcountries-info.netlify.app/",
    descr:
      "World Countries Info webapp is a mobile web application that checks a list of country population from an API and displays them on the web page.It consist of two pages: the first page shows a list of countries that could be filtered by some parameters and the second page shows the country details.",
  },
  {
    id: 4,
    image: conference,
    name: "Conference Schedule",
    source: "https://github.com/Kevin-Mena/Conference-schedule",
    demo: "https://kevin-mena.github.io/Conference-schedule/",
    descr:
      "Conference schedule is a forum website where developers can interact and get updates,join and get news about an upcoming developers forum",
  },
];
