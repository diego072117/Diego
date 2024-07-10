// projectsData.js
import IMGECONNECT1 from "../assets/econnect/c1.png";
import IMGECONNECT2 from "../assets/econnect/home.png";
import IMGECONNECT3 from "../assets/econnect/profile.png";
import IMGECONNECT4 from "../assets/econnect/update-profile.png";
import IMGECONNECT5 from "../assets/econnect/details-post.png";
import IMGECONNECT6 from "../assets/econnect/all-users.png";

import IMGPOLI1 from "../assets/poliapuestas/c1.png";
import IMGPOLI2 from "../assets/poliapuestas/p1.png";
import IMGPOLI3 from "../assets/poliapuestas/p2.png";
import IMGPOLI4 from "../assets/poliapuestas/p3.png";
import IMGPOLI5 from "../assets/poliapuestas/p4.png";

import IMGSPOTY1 from "../assets/spoty-c/c1.png";
import IMGSPOTY2 from "../assets/spoty-c/s1.png";
import IMGSPOTY3 from "../assets/spoty-c/s2.png";
import IMGSPOTY4 from "../assets/spoty-c/s3.png";

import IMGSBES1 from "../assets/bespet/c1.png";
import IMGSBES2 from "../assets/bespet/b1.png";
import IMGSBES3 from "../assets/bespet/b2.png";
import IMGSBES4 from "../assets/bespet/b3.png";
import IMGSBES5 from "../assets/bespet/b4.png";
import IMGSBES6 from "../assets/bespet/b5.png";
import IMGSBES7 from "../assets/bespet/b6.png";
import IMGSBES8 from "../assets/bespet/b7.png";
import IMGSBES9 from "../assets/bespet/b8.png";
import IMGSBES10 from "../assets/bespet/b9.png";
import IMGSBES11 from "../assets/bespet/b10.png";

import IMGSMOVI1 from "../assets/movies-api/c1.png";
import IMGSMOVI2 from "../assets/movies-api/m1.png";
import IMGSMOVI3 from "../assets/movies-api/m2.png";
import IMGSMOVI4 from "../assets/movies-api/m3.png";
import IMGSMOVI5 from "../assets/movies-api/m4.png";
import IMGSMOVI6 from "../assets/movies-api/m5.png";
import IMGSMOVI7 from "../assets/movies-api/m6.png";

import IMGSMON1 from "../assets/mongo-game/c1.png";
import IMGSMON2 from "../assets/mongo-game/mo1.png";
import IMGSMON3 from "../assets/mongo-game/mo2.png";
import IMGSMON4 from "../assets/mongo-game/mo3.png";

export const projects = [
  {
    id: 1,
    img1: IMGECONNECT1,
    imgs: [
      IMGECONNECT2,
      IMGECONNECT3,
      IMGECONNECT4,
      IMGECONNECT5,
      IMGECONNECT6,
    ],
    title: "Ecconect",
    description:
      "The Ecconect project is a mini social network created with the goal of promoting exchanges and donations. On this platform, people can post items they no longer use so that others or foundations can benefit from them. Additionally, an independent API and an independent frontend were developed for the platform.",
    stock: "React, Sas, Laravel, Vite, JavaScript, Redux, Toast, Sass",
    github: "https://github.com/diego072117/Ecconect",
  },
  {
    id: 2,
    img1: IMGPOLI1,
    imgs: [IMGPOLI2, IMGPOLI3, IMGPOLI4, IMGPOLI5],
    title: "PoliApuestas",
    description:
      "Poliapuestas is a project designed to facilitate organized and secure raffles and bets. The platform ensures that organizers, participants, and administrators have clearly defined roles, contributing to the smooth and efficient operation of the application. Additionally, an independent API and an independent frontend were developed for the platform",
    stock:
      "React, Sas, Laravel, Vite, JavaScript, JWT, PostgreSql, PhpUnit, Sass",
    github: "https://github.com/diego072117/PoliApuestas",
  },
  {
    id: 3,
    img1: IMGSPOTY1,
    imgs: [IMGSPOTY2, IMGSPOTY3, IMGSPOTY4],
    title: "Spoty-C",
    description:
      "Spoty-C is a project inspired by Spotify, where users can freely listen to a variety of songs. The platform offers personalized playlists, song recommendations, and an intuitive interface, making it easy to explore and enjoy music from different genres and artists.",
    stock: "Astro, React, JavaScript,TypeScript, Tailwind, Vite, Zustand, Sass",
    github: "https://github.com/diego072117/Spotify-C",
  },
  {
    id: 4,
    img1: IMGSBES1,
    imgs: [
      IMGSBES2,
      IMGSBES3,
      IMGSBES4,
      IMGSBES5,
      IMGSBES6,
      IMGSBES7,
      IMGSBES8,
      IMGSBES9,
      IMGSBES10,
      IMGSBES11,
    ],
    title: "Bespet",
    description:
      "Bespet is a system for a dog grooming salon designed to optimize service assignment and improve order in its execution. With this project, we aim to increase the efficiency of grooming salons by enabling the manager to assign available services to groomers more effectively. Additionally, clients will be able to access relevant information and products through the platform.",
    stock: "Java, JavaScript, Sql, Junit, Css",
    github: "https://github.com/diego072117/Bespet",
  },
  {
    id: 5,
    img1: IMGSMOVI1,
    imgs: [IMGSMOVI2, IMGSMOVI3, IMGSMOVI4, IMGSMOVI5, IMGSMOVI6, IMGSMOVI7],
    title: "Movies",
    description:
      "Movies is a project where we can explore the most popular movies, view their ratings and trailers, as well as search for the movie we desire. This platform is designed to provide a comprehensive experience for movie enthusiasts, allowing them to discover new films and stay up-to-date with the latest cinematic trends.",
    stock: "React, JavaScript, Sass",
    github: "https://github.com/diego072117/Movies-Api",
  },
  {
    id: 6,
    img1: IMGSMON1,
    imgs: [IMGSMON2, IMGSMON3, IMGSMON4],
    title: "Mongo Game",
    description:
      "This game aims to teach you how to use basic MongoDB commands through 4 levels. Each level covers specific concepts and progressively enhances your skills. We have a study section with explanations and practical examples, and a section for console practice. By the end, you will have a solid understanding of essential MongoDB commands.",
    stock: "Html, Css, JavaScript",
    github: "https://github.com/diego072117/Juego-Mongo",
  },
];
