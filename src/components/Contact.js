import React from "react";
const Contact = () => {
  return (
    <div className="form">
      <h2 className="contact-me">CONTACT ME</h2>
      <p className="contact-info">
        If you have an application you are interested in developing, a feature
        that you need built or a project that needs coding. I'd love to help
        with it
      </p>
      <form>
        <div className="labels">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="labels">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="labels">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="send" type="submit">
          Get in touch
        </button>
      </form>
    </div>
  );
};
export default Contact;
