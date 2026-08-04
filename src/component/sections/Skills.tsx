import {FaReact, FaJava, FaPython, FaGitAlt, FaGithub, FaDocker,} from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import {SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss, SiMysql, SiJupyter, SiNodedotjs, SiExpress,} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillcategory = [
    {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "HTML",
        icon: SiHtml5,
      },
      {
        name: "CSS",
        icon: SiCss,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },
  {
  title: "Programming",
  skills: [
    {
      name: "Java",
      icon: FaJava,
    },
    {
      name: "Python",
      icon: FaPython,
    },
  ],
},
{
  title: "Database",
  skills: [
    {
      name: "MySQL",
      icon: SiMysql,
    },
    {
      name: "Oracle SQL",
      icon: GrOracle,
    },
  ],
},
{
  title: "Tools",
  skills: [
    {
      name: "Git",
      icon: FaGitAlt,
    },
    {
      name: "GitHub",
      icon: FaGithub,
    },
    {
      name: "VS Code",
      icon: VscVscode,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },
    {
      name: "Jupyter Notebook",
      icon: SiJupyter,
    },
  ],
},
{
  title: "Currently Learning",
  skills: [
    {
      name: "Node.js",
      icon: SiNodedotjs,
    },
    {
      name: "Express.js",
      icon: SiExpress,
    },
  ],
},
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto py-6">
            <div className="mb-16">
                <h2 className="text-5xl font-bold text-slate-900">
                    My Tech Stack
                </h2>

                <p className="text-slate-500 mt-5 max-w-2xl leading-8">
                    The technologies, programming languages, databases,
                    and tools I use to build modern web applications while 
                    continuously learning new skills.
                </p>
                <div className="w-48 h-0.5 bg-blue-500 mt-8 rounded-full"></div>
            </div>
            <div className="space-y-16">
                {
                    skillcategory.map((category) =>(
                        <div key={category.title}>
                            <h3 className="font-semibold text-3xl text-slate-900 mb-8">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {
                                category.skills.map((skill) => {
                                    const Icon = skill.icon;
                                    return (
                                    <div key={skill.name} className="group bg-white border border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center gap-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
                                        <Icon className="text-5xl text-slate-700 transition-all duration-300 group-hover:text-blue-600" />
                                        <h4 className="text-lg font-semibold text-slate-900">
                                            {skill.name}
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