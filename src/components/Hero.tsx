"use client";

import { Github, Mail, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./ImageWithFallback";

export function Hero() {
    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    {/* Social Links */}
                    <div className="flex justify-center gap-4 mb-8">
                        <a href="https://github.com/tijnara" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="mailto:aranjitarchita@gmail.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>

                    {/* Profile Image */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            {/* Further reduced width for md and lg screens */}
                            <div className="w-32 md:w-44 lg:w-56 aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
                                <ImageWithFallback
                                    src="/me_portfolioHD.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    fill={true}
                                    sizes="(max-width: 768px) 8rem, (max-width: 1024px) 11rem, 14rem"
                                />
                            </div>
                            {/* Decorative Elements (scaled for large photo) */}
                            {/* You might want to scale these down too if they feel too big now */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-orange-500 rounded-full opacity-20"></div>
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-orange-500 rounded-full opacity-20"></div>
                        </div>
                    </div>

                    {/* Greeting */}
                    <p className="mb-4 text-4xl sm:text-5xl font-bold">
                        <span className="text-orange-500">👋 Hi, I'm </span>
                        <span className="text-black text-5xl sm:text-6xl font-extrabold">Aranjit D. Archita</span>
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto">
                        I am a <span className="text-orange-500 relative">
              Full-Stack Developer
              <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-200 -z-10"></span>
            </span>{" "}
                        who builds and modernizes{" "}
                        <span className="text-orange-500 relative">
              enterprise applications
              <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-200 -z-10"></span>
            </span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                        Using Vue.js, Laravel, and Node.js to create robust, scalable solutions for complex business needs.
                    </p>

                    {/* CTA Button */}
                    <Button
                        onClick={scrollToContact}
                        className="bg-orange-500 hover:bg-orange-600 px-8 py-6 gap-2"
                    >
                        Explore Portfolio
                        <ArrowDown size={18} />
                    </Button>

                    {/* Decorative Sun Icons */}
                    <div className="absolute top-1/4 left-10 hidden lg:block">
                        <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
                            <div className="w-8 h-8 bg-orange-300 rounded-full relative">
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1 h-4 bg-orange-500 top-1/2 left-1/2 origin-bottom"
                                        style={{
                                            transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-12px)`,
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-1/3 right-20 hidden lg:block">
                        <div className="w-20 h-20 rounded-full bg-orange-400 flex items-center justify-center">
                            <div className="w-10 h-10 bg-orange-200 rounded-full relative">
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1 h-5 bg-orange-400 top-1/2 left-1/2 origin-bottom"
                                        style={{
                                            transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-15px)`,
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}