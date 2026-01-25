import React, { useState, useEffect } from "react";

import { Menu, X, Code } from "lucide-react";

import { motion } from "framer-motion";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "Home",
        "About",
        "Projects",
        "Certifications",
        "Contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Code className="text-green-400" size={24} />
            <span className="text-green-400 font-mono font-bold">
              dev@portfolio:~$
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Certifications", "Contact"].map(
              (section) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.05,
                    color: "#10b981",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                    delay:
                      0.3 +
                      [
                        "Home",
                        "About",
                        "Certifications",
                        "Projects",
                        "Contact",
                      ].indexOf(section) *
                        0.1,
                  }}
                  onClick={() => scrollToSection(section)}
                  className={`font-mono text-sm transition-colors hover:text-green-400 ${
                    activeSection == section
                      ? "text-green-400"
                      : "text-gray-300"
                  } cursor-pointer`}
                >
                  {section}
                </motion.button>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="md:hidden text-green-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 border-t border-gray-700"
          >
            {["Home", "About", "Certifications", "Projects", "Contact"].map(
              (section) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{
                    scale: 1.05,
                    color: "#10b981",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 font-mono text-sm text-gray-300 hover:text-green-400 transition-colors cursor-pointer"
                >
                  {section}
                </motion.button>
              ),
            )}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
