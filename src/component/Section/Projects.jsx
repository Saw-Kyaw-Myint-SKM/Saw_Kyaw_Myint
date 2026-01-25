import { Terminal } from "lucide-react";
import { projects } from "../../data/project";
import { ProjectCard } from "../ProjectCard";
import { MacTerminalWindow } from "../MacTerminalWindow";
import { ScrollReveal } from "../ScrollReveal";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  AnimatePresence,
} from "framer-motion";

export const Projects = () => {
  return (
    <section id="Projects" className="md:py-8 py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.2}>
          <MacTerminalWindow title="Projects">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-bold text-green-400 font-mono mb-6 text-center flex items-center justify-center"
            >
              <Terminal className="inline mr-2" size={20} />
              Project Experience
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 md:gap-4 gap-1">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} {...project} delay={0.4} />
              ))}
            </div>
          </MacTerminalWindow>
        </ScrollReveal>
      </div>
    </section>
  );
};
