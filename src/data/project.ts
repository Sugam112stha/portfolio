import AlphaMart from "../assets/projects/alpha-mart.png";
import Himaaus from "../assets/projects/himaaus-dashboard.png";
import Gym from "../assets/projects/gym-system.png";

export const projects = [
  {
    id: 1,
    title: "Alpha Mart",
    subtitle: "Second-Hand Electronics Marketplace",

    description:
      "A full-stack marketplace for buying and selling second-hand electronic devices.",

    image: AlphaMart,

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
    ],

    github: "",

    live: "",

    featured: true,
  },

  {
    id: 2,

    title: "HimaAus Dashboard",

    subtitle: "Education Consultancy Admin Dashboard",

    description:
      "A responsive admin dashboard for managing website content and student inquiries.",

    image: Himaaus,

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    github: "",

    live: "",

    featured: false,
  },

  {
    id: 3,

    title: "Gym Membership System",

    subtitle: "Desktop Management System",

    description:
      "A Java Swing desktop application for managing gym members and memberships.",

    image: Gym,

    technologies: [
      "Java",
      "Swing",
      "MySQL",
    ],

    github: "",

    live: "",

    featured: false,
  },
];