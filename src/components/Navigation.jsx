import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const sections = ["hero", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gray-900/95 border-b border-gray-700/50 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            S M D
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 md:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 rounded-lg text-sm md:text-base transition-all ${
                  activeSection === item.id
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-blue-500/20 rounded-lg border border-blue-500/30"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileNav((prev) => !prev)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Open navigation"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <rect
                  x="4"
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="4"
                  y="15"
                  width="16"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {showMobileNav && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900/98 border-b border-gray-700/50 shadow-lg"
          >
            <div className="flex flex-col px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setShowMobileNav(false);
                  }}
                  className={`relative px-3 py-2 rounded-lg text-base transition-all ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavMobile"
                      className="absolute inset-0 bg-blue-500/20 rounded-lg border border-blue-500/30"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
