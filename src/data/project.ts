import AlphaMart from "../../src/assets/project/alpha-mart.png"
import Himaaus from "../../src/assets/project/himaaus-dashboard.png"
import HimaAus from "../assets/project/image.png"
const projects = [

  {
    id: 1,

    title: "HimaAus",

    subtitle: "Education Consultancy",

    description:
      "A modern, responsive education consultancy website for HimaAus, featuring study-abroad opportunities, visa and migration services, destination information, and user-focused content for students and visitors.",

    image: HimaAus,

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    live: "https://himaaus.vercel.app",

    featured: true,
  },

  {
    id: 2,

    title: "HimaAus Dashboard",

    subtitle: "Education Consultancy Admin Dashboard",

    description:
      "A responsive admin dashboard developed for HimaAus to manage website content, services, student inquiries, appointments, and other administrative operations.",

    image: Himaaus,

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    live: "https://himaaus-dash.vercel.app/",

    featured: true,
  },

  {
    id: 3,
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

    live: "",

    featured: true,
  },
];

export default projects;