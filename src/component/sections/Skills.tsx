const skillcategory = [
    {
        title : "Frontend",
        skills : [
            "React",
            "TailWind CSS",
            "TypeScript",
            "HTML",
            "CSS"
        ],
    },
    {
        title : "Programming",
        skills : [
            "Java",
            "Python"
        ],
    },
    {
        title : "Database",
        skills : [
            "MySQL",
            "Oracle SQL",
        ],
    },
    {
        title : "Backend",
        skills : [
            "Node.js",
            "Express.js",
        ],
    },
    {
        title : "Tools",
        skills : [
            "GitHub",
            "Vs Code",
            "Docker",
            "Jupyter Notebook",
        ],
    },
]

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
                                    category.skills.map((skill)=>(
                                        <div key={skill} className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
                                            <h4 className="text-lg font-semibold text-slate-900">
                                                {skill}
                                            </h4>
                                        </div>
                                    ))
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