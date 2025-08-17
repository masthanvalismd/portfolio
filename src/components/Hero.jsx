import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, -200]);

  const links = [
    { href: "https://github.com/masthanvalismd", icon: <Github /> },
    {
      href: "https://www.linkedin.com/in/mohammed-masthan-vali-a99385215",
      icon: <Linkedin />,
    },
    { href: "mailto:masthanvalismd@gmail.com", icon: <Mail /> },
  ];

  const downloadResume = () => {
    // Create a dummy PDF download - replace with your actual resume URL
    const link = document.createElement("a");
    link.href = "#"; // Replace with your actual resume URL
    link.download = "Alex_Chen_Resume.pdf";
    link.click();

    // For demo purposes, show an alert
    alert(
      "Resume download started! (Replace the URL with your actual resume file)"
    );
  };

  const FloatingElement = ({ children, delay = 0 }) => (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
  return (
    <motion.section
      id="hero"
      style={{ y: heroY }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

      {/* Floating Elements */}
      <FloatingElement delay={0}>
        <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
      </FloatingElement>
      <FloatingElement delay={2}>
        <div className="absolute top-40 right-32 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
      </FloatingElement>
      <FloatingElement delay={1}>
        <div className="absolute bottom-32 left-40 w-24 h-24 bg-pink-500/10 rounded-full blur-xl" />
      </FloatingElement>

      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Mohammed Masthan Vali
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Front-End Developer specializing in ReactJS & modern UI design. I
            build responsive, high-performance web applications that combine
            clean code, great UX, and scalable architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex space-x-6">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={downloadResume}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
