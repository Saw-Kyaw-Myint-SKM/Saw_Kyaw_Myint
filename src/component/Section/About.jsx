import { AboutMeMacTerminal } from "../AboutMeMacTerminal";
import { ScrollReveal } from "../ScrollReveal";

export const About = () => {
  return (
    <section id="About" className="md:py-8 py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.2}>
          <AboutMeMacTerminal />
        </ScrollReveal>
      </div>
    </section>
  );
};
