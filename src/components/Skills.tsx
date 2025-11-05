import * as React from "react";

export function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["Vue 3 (Composition API)", "Pinia", "Next.js", "Tailwind CSS", "HTML/CSS"],
        },
        {
            title: "Backend",
            skills: ["Laravel (PHP)", "Node.js", "Express.js", "Java", "RESTful APIs", "WebSockets"],
        },
        {
            title: "Database & Tools",
            skills: ["SQL (Schema Design, Normalization)", "Directus", "Git", "Docker", "Networking"],
        },
    ];

    const technologies = [
        { name: "Vue.js", color: "bg-green-600" },
        { name: "Laravel", color: "bg-red-600" },
        { name: "Node.js", color: "bg-green-700" },
        { name: "Next.js", color: "bg-gray-900" },
        { name: "PHP", color: "bg-indigo-600" },
        { name: "SQL", color: "bg-blue-700" },
        { name: "Pinia", color: "bg-yellow-500" },
        { name: "Directus", color: "bg-purple-600" },
        { name: "Java", color: "bg-orange-600" },
    ];

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl mb-4">
                        Core <span className="text-orange-500">Toolkit</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Enterprise-grade technologies for building robust, scalable applications
                    </p>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:scale-105 transition-transform cursor-default"
                        >
                            <span className={`inline-block w-2 h-2 rounded-full ${tech.color} mr-2`}></span>
                            {tech.name}
                        </div>
                    ))}
                </div>

                {/* Skill Categories */}
                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl">
                            <h3 className="text-xl mb-6 text-orange-500">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}