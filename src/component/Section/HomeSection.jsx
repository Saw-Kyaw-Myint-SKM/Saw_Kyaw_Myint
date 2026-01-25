import Profile from "../../assets/profile.png";
import { personal } from "../../data/personal";
import { MacTerminalWindow } from "../MacTerminalWindow";
import { motion } from "framer-motion";

export const HomeSection = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center pt-16 pb-8"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MacTerminalWindow title="Welcome to my portfolio" delay={0.2}>
          <div className="space-y-6">
            {/* Profile Photo without animation */}
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block cursor-pointer"
            >
              <div className="w-44 h-44 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-400/30 mx-auto">
                <img
                  src={Profile}
                  alt="Alex Chen"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-4xl sm:text-4xl md:text-4xl font-bold mb-4"
            >
              <span className="text-green-400 font-mono">Hello, I'm</span>
              <br />
              <span className="text-white">{personal.name}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-xl text-gray-300 font-mono leading-relaxed"
            >
              {personal.ten_stack}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              {personal.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <motion.a
                href="#Projects"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#10b981",
                  color: "#0f172a",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-400 text-gray-900 px-6 py-2.5 rounded-lg font-mono font-bold hover:bg-green-300 transition-colors cursor-pointer"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#Contact"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  borderColor: "#10b981",
                }}
                whileTap={{ scale: 0.95 }}
                className="border border-green-400 text-green-400 px-6 py-2.5 rounded-lg font-mono font-bold hover:bg-green-400/10 transition-colors cursor-pointer"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </MacTerminalWindow>
      </div>
    </section>
  );
};
