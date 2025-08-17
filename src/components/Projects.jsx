import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format",
      github: "#",
      live: "#",
    },
    {
      title: "AI Chat Application",
      description:
        "Real-time chat application with AI integration using OpenAI API. Built with React, Socket.io, and Express.",
      tech: ["React", "Socket.io", "OpenAI API", "Express"],
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop&auto=format",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
      tech: ["React", "Firebase", "Material-UI", "Zustand"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format",
      github: "#",
      live: "#",
    },
  ];
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </motion.a>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
