import { ShieldCheck, X as CloseIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CertificationModal = ({ isOpen, onClose, certification }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-gray-900 rounded-xl p-6 border border-green-400/30">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-green-400 font-mono">
                  {certification.title}
                </h2>
                <p className="text-gray-400">
                  {certification.issuer} • {certification.date}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <CloseIcon size={24} />
              </motion.button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/30 flex items-center justify-center overflow-hidden">
                  {certification.image ? (
                    <img
                      src={certification.image}
                      alt={`${certification.title} certification`}
                      className="w-24 h-24 object-contain"
                    />
                  ) : (
                    <ShieldCheck className="text-green-400" size={48} />
                  )}
                </div>
              </div>

              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed">
                  {certification.history}
                </p>

                {/* Mock certificate image - in real app this would be the actual certificate */}
                <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-green-400/20">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600">
                    <img
                      src={certification.certifications_image}
                      alt={`${certification.title} certification`}
                      className="h-full w-full"
                    />
                    {/* <ShieldCheck
                        className="text-green-400 mx-auto mb-2"
                        size={48}
                      />
                      <p className="text-gray-400 text-sm">Certificate Image</p>
                      <p className="text-green-400 text-xs mt-1 font-mono">
                        {certification.title}
                      </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
