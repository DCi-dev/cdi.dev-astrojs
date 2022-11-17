type Org = {
  name: string;
  logo: string;
};

/* Organizations */

// const LinkedIn: Org = {
//   name: "LinkedIn",
//   logo: "/img/org/linkedin.png",
// };

const Udemy: Org = {
  name: "Udemy",
  logo: "/img/org/udemy.png",
};

const freeCodeCamp: Org = {
  name: "freeCodeCamp",
  logo: "/img/org/freeCodeCamp.png",
};

const Triplebyte: Org = {
  name: "Triplebyte",
  logo: "/img/org/triplebyte.png",
};

const Microsoft: Org = {
  name: "Microsoft",
  logo: "/img/org/microsoft.png",
};

const certificatesData = [
  {
    title: "The Complete Web Developer in 2022",
    issuedDate: "Sept, 2022",
    issuedBy: Udemy,
    url: "https://www.udemy.com/certificate/UC-56610012-bf1a-4eda-873b-64f86d36bd78/",

    pinned: true,
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuedDate: "Aug, 2022",
    issuedBy: freeCodeCamp,
    url: "https://freecodecamp.org/certification/CDi/javascript-algorithms-and-data-structures",

    pinned: true,
  },
  {
    title: "Responsive Web Design",
    issuedDate: "Aug, 2022",
    issuedBy: freeCodeCamp,
    url: "https://freecodecamp.org/certification/CDi/responsive-web-design",

    pinned: true,
  },
  {
    title: "React - Level 3 - Proficient",
    issuedDate: "Aug, 2022",
    issuedBy: Triplebyte,
    url: "https://triplebyte.com/tb/cdi-6fss9cn/certificate",

    pinned: true,
  },
  {
    title: "MTA: Introduction to Programming Using JavaScript",
    issuedDate: "June, 2022",
    issuedBy: Microsoft,
    url: "https://www.credly.com/badges/a37551fc-8bc5-4712-9442-8696b0401c32",

    pinned: true,
  },
  {
    title: "MTA: Introduction to Programming Using HTML and CSS",
    issuedDate: "May, 2022",
    issuedBy: Microsoft,
    url: "https://www.credly.com/badges/7c2ee275-1089-4c2e-8f45-39f3fd1eced2",
    pinned: true,
  },
];

export default certificatesData;
