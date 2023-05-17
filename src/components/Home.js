import { motion } from "framer-motion";
import myResume from "../assets/myResume.pdf";

const Home = () => {
  const heroVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5 },
    },
  };

  return (
    <motion.div
      className="hero"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <h5>Hi,</h5>
      <h1>I'm Kevin</h1>

      <p className="intro-position">FRONT-END DEVELOPER</p>

      <a href={myResume} download="KevinResume.pdf" className="resume">
        Get my resume
      </a>
    </motion.div>
  );
};

export default Home;
