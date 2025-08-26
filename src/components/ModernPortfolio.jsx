import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowUp } from "lucide-react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navigation from "./Navigation";

const ModernPortfolio = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();

  const skillsY = useTransform(scrollY, [1000, 2000], [100, -100]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skillCategories = [
    {
      key: "frontend",
      title: "Frontend Development",
      grid: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
      stops: [
        { color: "text-blue-400", stopColor: "currentColor" },
        { color: "text-purple-400", stopColor: "currentColor" },
      ],
    },
    {
      key: "backend",
      title: "Backend Development",
      grid: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
      stops: [
        { color: "text-green-400", stopColor: "currentColor" },
        { color: "text-blue-400", stopColor: "currentColor" },
      ],
    },
    {
      key: "tools",
      title: "Tools & Technologies",
      grid: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
      stops: [
        { color: "text-blue-400", stopColor: "currentColor" },
        { color: "text-purple-400", stopColor: "currentColor" },
      ],
    },
  ];
  const skills = {
    frontend: [
      {
        name: "React",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "from-blue-400 to-cyan-400",
      },
      {
        name: "JavaScript",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "from-yellow-400 to-orange-400",
      },
      {
        name: "TypeScript",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "from-blue-500 to-indigo-500",
      },
      {
        name: "Material UI",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        color: "from-green-400 to-emerald-400",
      },
      {
        name: "Tailwind CSS",
        level: 92,
        icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
        color: "from-cyan-400 to-blue-400",
      },
      {
        name: "Bootstrap",
        level: 88,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        color: "from-pink-400 to-purple-400",
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 88,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "from-green-500 to-lime-500",
      },
      {
        name: "Python",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "from-yellow-500 to-green-500",
      },
      {
        name: "MySQL",
        level: 82,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        color: "from-blue-600 to-indigo-600",
      },
      {
        name: "MongoDB",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "from-green-600 to-teal-600",
      },
      {
        name: "Express.js",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "from-gray-600 to-gray-800",
      },
      {
        name: "Mongoose",
        level: 75,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
        color: "from-pink-500 to-rose-500",
      },
    ],
    tools: [
      {
        name: "VS Code",
        level: 98,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "from-blue-500 to-indigo-500",
      },
      {
        name: "Git",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "from-orange-500 to-red-500",
      },
      {
        name: "Postman",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        color: "from-orange-400 to-yellow-400",
      },
      {
        name: "MongoDB Compass",
        level: 85,
        icon: "https://img.icons8.com/color/48/000000/mongodb.png",
        color: "from-green-500 to-teal-500",
      },
      {
        name: "Chrome DevTools",
        level: 92,
        icon: "https://img.icons8.com/color/48/000000/chrome--v1.png",
        color: "from-yellow-400 to-blue-400",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}

      <motion.section
        id="skills"
        style={{ y: skillsY }}
        className="py-20 px-4 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          </motion.div>
          <div className="space-y-16">
            {skillCategories.map((category, sIdx) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sIdx * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-300">
                  {category.title}
                </h3>
                <div className={`grid ${category.grid} gap-6`}>
                  {skills[category.key].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="relative group"
                    >
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center h-full">
                        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10 mx-auto"
                          />
                        </div>
                        <h4 className="text-lg font-semibold mb-3 text-white">
                          {skill.name}
                        </h4>
                        {/* Progress Circle */}
                        {/* <div className="relative w-16 h-16 mx-auto mb-2">
                          <svg
                            className="w-16 h-16 transform -rotate-90"
                            viewBox="0 0 64 64"
                          >
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                              className="text-gray-700"
                            />
                            <motion.circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke={`url(#gradient-${category.key}-${index})`}
                              strokeWidth="4"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: skill.level / 100 }}
                              transition={{ duration: 2, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              strokeDasharray={2 * Math.PI * 28}
                              strokeDashoffset={
                                2 * Math.PI * 28 * (1 - skill.level / 100)
                              }
                            />
                            <defs>
                              <linearGradient
                                id={`gradient-${category.key}-${index}`}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                {category.stops.map((stop, i) => (
                                  <stop
                                    key={i}
                                    offset={i === 0 ? "0%" : "100%"}
                                    className={stop.color}
                                    stopColor={stop.stopColor}
                                  />
                                ))}
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-white">
                              {skill.level}%
                            </span>
                          </div>
                        </div> */}
                      </div>
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300 -z-10`}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Mohammed Masthan Vali. Built with React & Framer Motion.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg z-50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModernPortfolio;
