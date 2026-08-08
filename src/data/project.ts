import AlphaMart from "../../src/assets/project/alpha-mart.png"
import Himaaus from "../../src/assets/project/himaaus-dashboard.png"
const projects = [
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

    live: "",

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
];

export default projects;