import { MacTerminalWindow } from "./MacTerminalWindow";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export const CertificationCard = ({
  title,
  issuer,
  date,
  description,
  image,
  delay = 0,
  onClick,
}) => (
  <ScrollReveal delay={delay}>
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <MacTerminalWindow title={title}>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Certification Image */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/30 flex items-center justify-center overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    alt={`${title} certification`}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <ShieldCheck className="text-green-400" size={24} />
                )}
              </div>
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              {/* Click indicator */}
              <div className="absolute inset-0 border-2 border-green-400/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Certification Details */}
          <div className="flex-1">
            <div className="flex items-start space-x-3 mb-2">
              <div>
                <h3 className="text-green-400 font-mono text-lg font-bold">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {issuer} • {date}
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
            <div className="mt-2 text-green-400/70 text-xs font-mono">
              Click to view certificate →
            </div>
          </div>
        </div>
      </MacTerminalWindow>
    </motion.div>
  </ScrollReveal>
);
