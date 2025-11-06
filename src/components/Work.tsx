import { ExternalLink, GithubIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./ImageWithFallback";

export function Work() {
    const projects = [
        {
            title: "Full-Stack Enterprise System",
            description: "Architected a comprehensive enterprise resource planning (ERP) system. Built a modern frontend with Next.js, React, and Zustand for managing modules like Sales Orders, Inventory, and HR. The backend is powered by Directus and a MySQL database.",
            image: "/images/erp.jpg",
            tags: ["Next.js", "React", "Zustand", "Directus", "MySQL", "ERP"],
            link: "https://github.com/tijnara/erp-web_xxxxxxx_divi",
            github: "https://github.com/tijnara",
        },
        {
            title: "Web-Based POS System",
            description: "A lightweight, web-based Point of Sale (POS) application built with Next.js and React, using Supabase for the backend and Zustand for state management.",
            image: "/images/pos.jpg",
            tags: ["Next.js", "React", "Supabase", "Zustand", "React Query", "POS"],
            link: "https://seasidepos.vercel.app/login",
            github: "https://github.com/tijnara",
        },
        {
            title: "Multi-Modal Attendance System",
            description: "Created a web-based attendance system that accepts input from physical hardware like fingerprint scanners and RFID readers. Built a Node.js Hardware Bridge using WebSockets to send data from USB hardware to the web app in real-time, with normalized SQL database for efficient logging.",
            image: "/images/attendance.jpg",
            tags: ["Vue.js", "Node.js", "WebSockets", "SQL", "IoT"],
            link: "https://github.com/tijnara/attendance-system-vue-modern",
            github: "https://github.com/tijnara",
        },
        {
            title: "Asset & Equipment Management System",
            description: "A system for tracking company assets and equipment. Built with a Node.js/Express backend, MySQL database, and a frontend using Vanilla HTML, CSS, and JavaScript.",
            image: "/images/assets.jpg",
            tags: ["JavaScript", "Node.js", "Express", "MySQL", "HTML", "CSS"],
            link: "https://github.com/tijnara/VERTEX-ER_asset_and_equipments",
            github: "https://github.com/tijnara",
        },
        {
            title: "HR Medical Dispensing System",
            description: "A web application for managing HR medical inventory and dispensing items to employees. Built with Vanilla JavaScript and a Node.js/Express backend connected to a MySQL database.",
            image: "/images/medical.jpg",
            tags: ["JavaScript", "Node.js", "Express", "MySQL", "HTML", "HR"],
            link: "https://github.com/tijnara/VERTEX-ER_HR",
            github: "https://github.com/tijnara",
        },
    ];

    return (
        <section id="work" className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl mb-4">
                        Featured <span className="text-orange-500">Projects</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        In-depth enterprise solutions showcasing full-stack development expertise
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    fill={true}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl mb-2">{project.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-orange-50 text-orange-500 rounded-full text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex-1 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                                        asChild
                                    >
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={16} className="mr-2" />
                                            View
                                        </a>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex-1 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                                        asChild
                                    >
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <GithubIcon size={16} className="mr-2" />
                                            Code
                                        </a>
                                    </Button>
                                    {/* Add POS Repo button for Web-Based POS System only */}
                                    {project.title === "Web-Based POS System" && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                                            asChild
                                        >
                                            <a href="https://github.com/tijnara/WebBasedPOS" target="_blank" rel="noopener noreferrer">
                                                POS Repo
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}