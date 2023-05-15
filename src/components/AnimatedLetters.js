import { motion } from "framer-motion";

const AnimatedLetters = ({ text }) => {
  const letters = text.split("");

  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.04 } },
  };

  const letterVariants = {
    before: { opacity: 0, y: 20 },
    after: { opacity: 1, y: 0 },
  };

  return (
    <motion.span variants={containerVariants} initial="before" animate="after">
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedLetters;
