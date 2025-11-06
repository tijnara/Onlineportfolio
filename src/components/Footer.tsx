import { Github, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4 text-orange-500">Aranjit D. Archita</h3>
            <p className="text-gray-400 text-sm">
              Full-stack developer specializing in building comprehensive enterprise solutions. Proven expertise in modern front-end stacks like Next.js/React and Vue.js, paired with robust Node.js backends (Express, WebSockets) and SQL databases.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-400 hover:text-orange-500 transition-colors">
                  My Work
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/tijnara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:aranjitarchita@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Aranjit D. Archita. Made with <Heart size={16} className="text-orange-500 fill-orange-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
