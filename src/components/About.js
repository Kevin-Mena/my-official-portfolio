const About = () => {
  return (
    <div className="about">
      <h2 className="about-me">ABOUT MYSELF</h2>
      <h3>Let me introduce myself.</h3>
      <div className="info-zone">
        {" "}
        <p className="about-info">
          I'm a very ambitious front-end developer looking for a role in a
          software development company with the opportunity to work with the
          latest technologies on diverse and challenging projects.
        </p>
        <p className="about-info">
          I am constantly seeking new challenges and opportunities to expand my
          skills and push the boundaries of what I can achieve. My goal is to
          create innovative and impactful solutions that make a positive
          difference. I am a strong believer in collaboration and enjoy working
          with diverse teams to bring ideas to life.
        </p>
        <p className="about-info">
          Feel free to explore my portfolio to get a glimpse of my work. If you
          have any questions or would like to collaborate on a project, I would
          love to hear from you. Let's connect and bring your ideas to life!
        </p>
      </div>
      <h3>SKILLS</h3>

      <div className="skills">
        <ul className="front-end">
          <h2>Front-End</h2>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </ul>
        <ul className="tools">
          <h2>Tools & Methods</h2>
          <li>Git</li>
          <li>Github</li>
          <li>Heroku</li>
          <li>Netlify</li>
          <li>TDD</li>
        </ul>
        <ul className="professional">
          <h2>Professional</h2>
          <li>Remote work</li>
          <li>Pair programming</li>
          <li>Team work</li>
          <li>Mentoring</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
