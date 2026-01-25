import { Mail, Phone, LinkedinIcon, FileDown, Github } from "lucide-react";
import { MacTerminalWindow } from "../MacTerminalWindow";
import { ScrollReveal } from "../ScrollReveal";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
} from "framer-motion";

export const Contact = () => {
  return (
    <section id="Contact" className="md:py-8 py-3 md:pb-12 mb-6">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.2}>
          <MacTerminalWindow title="Get In Touch">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl font-bold text-green-400 font-mono mb-4 flex items-center justify-center"
              >
                <Mail className="mr-2 hidden md:inline" size={20} />
                Let's Build Something Amazing Together
              </motion.h2>
              <div className="mb-4 md:px-8 px-5 py-4">
                <motion.div
                  whileHover={{
                    color: "#10b981",
                  }}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <Phone className="text-green-400" size={16} />
                  <a
                    href="tel:+959451340513"
                    className="text-gray-300 hover:underline"
                  >
                    09451340513
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{
                    color: "#10b981",
                  }}
                  className="flex items-center space-x-3 space-y-2 cursor-pointer"
                >
                  <Mail className="text-green-400 mt-1" size={16} />
                  <a
                    href="mailto:sawkyawmyint.dev@gmail.com"
                    className="hover:underline m-0"
                  >
                    sawkyawmyint.dev@gmail.com
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{
                    color: "#10b981",
                  }}
                  className="flex items-center space-x-3 space-y-2 cursor-pointer"
                >
                  <LinkedinIcon className="text-green-400" size={16} />
                  <span className="text-gray-300">
                    <a
                      target="_blank"
                      className="hover:underline"
                      href="https://www.linkedin.com/in/saw-kyaw-405886295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer=https%3A%2F%2Fweb.skype.com%2F"
                    >
                      Saw Kyaw Myint
                    </a>
                  </span>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <motion.a
                  href="/Saw_Kyaw_Myint.pdf"
                  download="Saw_Kyaw_Myint_Resume"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#10b981",
                    color: "#0f172a",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 border border-gray-400 bg-green-400 text-gray-700 px-4 py-2 rounded-lg font-mono font-bold hover:bg-green-300 transition-colors text-sm cursor-pointer"
                >
                  <FileDown size={14} />
                  <span>Resume</span>
                </motion.a>
                <motion.a
                  href="https://github.com/Saw-Kyaw-Myint-SKM"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    borderColor: "#10b981",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 border border-green-400 text-green-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-green-400/10 transition-colors text-sm cursor-pointer"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </motion.a>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    borderColor: "#10b981",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 border border-green-400 text-green-400 px-4 py-2 rounded-lg font-mono font-bold hover:bg-green-400/10 transition-colors text-sm cursor-pointer"
                >
                  <Mail size={14} />
                  <a href="mailto:sawkyaw7777777@gmail.com" target="_blank">
                    Send Email
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </MacTerminalWindow>
        </ScrollReveal>
      </div>
    </section>
  );
};
