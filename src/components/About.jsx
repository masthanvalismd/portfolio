import { motion } from "framer-motion";
import { Download } from "lucide-react";
import smdImg from "../assets/smd.jpg";

const About = () => {
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
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Simple background glow - positioned behind */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl opacity-60 -z-10" />

            <div className="relative w-80 h-80 mx-auto">
              {/* Circular image with hover zoom - proper event handling */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group relative z-10">
                <img
                  src={smdImg}
                  alt="Alex Chen - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 cursor-pointer"
                />

                {/* Simple overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I’m Mohammed Masthan Vali, a Front-End Developer with 3.5+
              years of experience crafting responsive, user-friendly, and
              high-performance web applications. My expertise lies in ReactJS,
              JavaScript, HTML, CSS, and modern UI frameworks like Bootstrap and
              Material UI.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I’m not coding, I’m exploring new web technologies, learning
              design trends, and sharpening my problem-solving skills to stay
              ahead in the fast-paced tech world.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I’m not coding, I’m exploring new web technologies, learning
              design trends, and sharpening my problem-solving skills to stay
              ahead in the fast-paced tech world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Let's Connect
              </motion.button>

              <motion.button
                onClick={downloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-8 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
