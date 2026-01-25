import {
  // eslint-disable-next-line no-unused-vars
  motion,
} from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="md:py-8 py-6 border-t border-gray-700"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          whileHover={{
            color: "#10b981",
            scale: 1.02,
          }}
          className="text-gray-400 font-mono text-sm cursor-pointer"
        >
          © 2025 Saw Kyaw Myin. Built with React and Tailwind CSS.
        </motion.p>
      </div>
    </motion.footer>
  );
};
