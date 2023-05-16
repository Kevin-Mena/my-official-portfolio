import React from "react";
import AnimatedLetters from "./AnimatedLetters";

const Contact = () => {
  return (
    <div className="form">
      <h2 className="contact-me">CONTACT</h2>
      <h3>I'd Love To Hear From You.</h3>
      <p className="contact-info">
        <AnimatedLetters
          text="  If you have an application you are interested in developing, a feature
        that you need built or a project that needs coding. I'd love to help
        with it."
        />
      </p>
      <form>
        <div className="labels">
          <input
            className="form-control"
            type="text"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="labels">
          <input
            className="form-control"
            type="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="labels">
          <textarea
            className="form-control"
            id="message"
            placeholder="Message"
            required
          />
        </div>
        <button className="send" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
export default Contact;
