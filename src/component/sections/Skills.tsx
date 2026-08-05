import {FaReact, FaJava, FaPython, FaGitAlt, FaGithub, FaDocker,} from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import {SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss, SiMysql, SiJupyter, SiNodedotjs, SiExpress,} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
    {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: FaReact,
        color : "text-sky-400",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color : "text-blue-400",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color : "text-yellow-400",
      },
      {
        name: "HTML",
        icon: SiHtml5,
        color : "text-orange-400",
      },
      {
        name: "CSS",
        icon: SiCss,
        color : "text-blue-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color : "text-cyan-400",
      },
    ],
  },
  {
  title: "Programming",
  skills: [
    {
      name: "Java",
      icon: FaJava,
      color : "text-orange-400",
    },
    {
      name: "Python",
      icon: FaPython,
      color : "text-yellow-400",
    },
  ],
},
{
  title: "Database",
  skills: [
    {
      name: "MySQL",
      icon: SiMysql,
      color : "text-blue-400",
    },
    {
      name: "Oracle SQL",
      icon: GrOracle,
      color : "text-red-400",
    },
  ],
},
{
  title: "Tools",
  skills: [
    {
      name: "Git",
      icon: FaGitAlt,
      color : "text-orange-400",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      color : "text-slate-400",
    },
    {
      name: "VS Code",
      icon: VscVscode,
      color : "text-blue-400",
    },
    {
      name: "Docker",
      icon: FaDocker,
      color : "text-blue-400",
    },
    {
      name: "Jupyter Notebook",
      icon: SiJupyter,
      color : "text-orange-400",
    },
  ],
},
{
  title: "Currently Learning",
  skills: [
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color : "text-green-400",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color : "text-gray-400",
    },
  ],
},
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-6xl tracking-tight font-bold text-slate-900">
                    My Tech Stack
                </h2>

                <p className="text-slate-500 mt-5 max-w-2xl leading-7 md:leading-8 md:text-lg ">
                    The technologies, programming languages, databases,
                    and tools I use to build modern web applications while 
                    continuously learning new skills.
                </p>
                <div className="w-32 md:w-48 h-[2px] bg-blue-500 mt-6 md:mt-8 rounded-full"></div>
            </div>
            <div className="space-y-14 lg:space-y-20">
                {
                    skillCategories.map((categories) =>(
                        <div key={categories.title}>
                            <h3 className="font-semibold text-3xl text-slate-900 mb-8">
                                {categories.title}
                            </h3>
                            <div className="w-16 md:w-20 h-1 bg-blue-500 rounded-full mb-6 md:mb-8"></div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                                {
                                categories.skills.map((tech) => {
                                    const Icon = tech.icon;
                                    return (
                                    <div key={tech.name} className="group h-[170px] md:h-[220px] bg-white border border-slate-200 rounded-2xl md:rounded-3xl p-5 md:p-10 flex flex-col items-center justify-center gap-4 md:gap-5 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:border-blue-500 hover:shadow-2xl">
                                        <Icon className={`${tech.color} text-5xl md:text-6xl transition-all duration-300 group-hover:scale-110`}/>
                                        <h4 className="text-base md:text-lg font-semibold text-slate-900">
                                            {tech.name}
                                        </h4>
                                    </div>
                                    );})
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills;