import AnimatedLetters from "./AnimatedLetters";
import myResume from "../assets/myResume.pdf";

const Home = () => {
  return (
    <div className="hero">
      <h5>
        <AnimatedLetters text="HELLO, WORLD." />
      </h5>
      <h1>
        <AnimatedLetters text="I'm Kevin Okoth" />
      </h1>

      <p className="intro-position">
        <span>Front-end Developer</span>
        <span>UI/UX Designer"</span>
      </p>

      <a href={myResume} download="KevinOkothResume.pdf" className="resume">
        Get my resume
      </a>
    </div>
  );
};

export default Home;
