import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Work() {
    const projects = [
        {
            title: "Full-Stack Enterprise System",
            description: "Modernized and built core business modules including Attendance and Inventory systems for an enterprise. Built a complex Vue 3 dashboard with Pinia to dynamically calculate employee work hours and overtime. Developed secure Laravel and Directus APIs with optimized SQL schemas.",
            image: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzYyMzM2Mjc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
            tags: ["Vue.js", "Pinia", "Laravel", "PHP", "Directus", "SQL"],
            link: "#",
            github: "https://github.com/tijnara",
        },
        {
            title: "Multi-Modal Attendance System",
            description: "Created a web-based attendance system that accepts input from physical hardware like fingerprint scanners and RFID readers. Built a Node.js Hardware Bridge using WebSockets to send data from USB hardware to the web app in real-time, with normalized SQL database for efficient logging.",
            image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYyMjM5ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
            tags: ["Vue.js", "Node.js", "WebSockets", "SQL", "IoT"],
            link: "#",
            github: "https://github.com/tijnara",
        },
        {
            title: "Procurement & Purchase Order System",
            description: "A comprehensive procurement system with multi-step approval workflows and vendor management. Built a Vue.js dashboard for creating purchase requisitions and tracking status, with a 3-table normalized SQL database schema managing vendors, orders, and line items.",
            image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjk5NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
            tags: ["Vue.js", "JavaScript", "SQL"],
            link: "#",
            github: "https://github.com/tijnara",
        },
        {
            title: "Next.js Application Migration",
            description: "Migrated several legacy company applications to modern Next.js framework. Created new server-rendered dashboards for salesman management and refactored legacy backend logic from Express.js into Next.js API routes for improved performance and maintainability.",
            image: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzYyMzM2Mjc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
            tags: ["Next.js", "React", "Node.js", "Express.js"],
            link: "#",
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
                                            <Github size={16} className="mr-2" />
                                            Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}