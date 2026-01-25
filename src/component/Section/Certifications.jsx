import { Award } from "lucide-react";
import { certifications } from "../../data/certifications";
import { CertificationCard } from "../CertificationCard";
import { MacTerminalWindow } from "../MacTerminalWindow";
import { ScrollReveal } from "../ScrollReveal";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
} from "framer-motion";

export const Certifications = ({ certificationClick }) => {
  return (
    <section id="Certifications" className="md:py-8 py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.2}>
          <MacTerminalWindow title="Professional Certifications">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-bold text-green-400 font-mono mb-6 text-center flex items-center justify-center"
            >
              <Award className="inline mr-2" size={20} />
              Industry Recognized Credentials
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={cert.id}
                  {...cert}
                  delay={0.4 + index * 0.2}
                  onClick={() => certificationClick(cert)}
                />
              ))}
            </div>
          </MacTerminalWindow>
        </ScrollReveal>
      </div>
    </section>
  );
};
