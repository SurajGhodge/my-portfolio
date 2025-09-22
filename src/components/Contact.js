import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <form className="w-75 mx-auto">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
