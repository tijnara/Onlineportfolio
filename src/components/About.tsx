import { Badge } from "./ui/badge";
import { Code2, Database, Wrench, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function About() {
    const expertise = [
        {
            icon: Code2,
            title: "Full Stack Developer",
        },
        {
            icon: Database,
            title: "Database Design",
        },
        {
            icon: Wrench,
            title: "Enterprise Solutions",
        },
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl mb-4">
                        About <span className="text-orange-500">Me</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From IT support to full-stack development: building the engines that power applications
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {expertise.map((item, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                            className="px-6 py-3 text-base bg-white border border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-colors"
                        >
                            <item.icon size={18} className="mr-2" />
                            {item.title}
                        </Badge>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl mb-6">My Journey</h3>
                        <p className="text-gray-600 mb-4">
                            My career began in IT and Technical Support, where I developed a methodical approach to problem-solving and learned how systems work from the ground up. This foundation taught me to think systematically about how different components interact and how to diagnose issues efficiently.
                        </p>
                        <p className="text-gray-600 mb-4">
                            What drives me as a developer is my passion for the backend—the "engine" of an application. I love designing databases, architecting the logic that makes everything work, and building the APIs that connect it all together. While I'm proficient across the full stack, I find the most satisfaction in creating robust, well-structured backend systems.
                        </p>
                        <p className="text-gray-600 mb-4">
                            I specialize in Vue.js, Laravel, and Node.js for enterprise applications, with expertise in SQL database design, normalization, and optimization. Whether it's building attendance systems with hardware integration or modernizing legacy systems, I bring both technical skill and creative problem-solving to every project.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FileText size={18} className="mr-2" />
                                    View Resume
                                </a>
                            </Button>
                            <Button variant="outline" className="hover:bg-orange-500 hover:text-white hover:border-orange-500" asChild>
                                <a href="https://github.com/tijnara" target="_blank" rel="noopener noreferrer">
                                    GitHub: tijnara
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="text-orange-500 mb-2">Backend Architecture</div>
                            <p className="text-sm text-gray-600">
                                Building robust APIs and designing efficient database schemas
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="text-orange-500 mb-2">Enterprise Systems</div>
                            <p className="text-sm text-gray-600">
                                Modernizing legacy applications and creating scalable business solutions
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="text-orange-500 mb-2">System Integration</div>
                            <p className="text-sm text-gray-600">
                                Connecting hardware with web applications via WebSockets and APIs
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="text-orange-500 mb-2">Problem Solving</div>
                            <p className="text-sm text-gray-600">
                                Methodical approach honed through IT support and technical troubleshooting
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}