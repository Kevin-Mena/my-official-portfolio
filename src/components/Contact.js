import React, { useRef } from "react";
import AnimatedLetters from "./AnimatedLetters";
import emailsjs from "@emailsjs/browser";
const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailsjs
      .sendForm("gmail", "YOUR_TEMPLATE_URL", refForm.current, "TOKEN")
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message,please try again!");
        }
      );
  };

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
      <form ref={refForm} onSubmit={sendEmail}>
        <div className="labels">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="labels">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="labels">
          <input
            className="form-control"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="labels">
          <textarea
            className="form-control"
            name="message"
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
