import myResume from '../assets/myResume.pdf';

const Home = () => (
  <div className="hero">
    <h5>Hi,</h5>
    <h1>I'm Kevin</h1>

    <p className="intro-position">FRONT-END DEVELOPER</p>

    <a href={myResume} download="KevinOkothResume.pdf" className="resume">
      Get my resume
    </a>
  </div>
);

export default Home;
