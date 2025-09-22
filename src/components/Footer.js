// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container text-center">
        <h4 className="mb-2">Let's Connect</h4>
        <p className="mb-4">Interested in working together or just want to say hello? Reach out!</p>

        <div className="mb-4">
          <a href="mailto:surajghodge1994@gmail.com" className="text-info mx-3 text-decoration-none">Email</a>
          <a href="https://www.linkedin.com/in/suraj-ghodge-b88617151/" target="_blank" rel="noopener noreferrer" className="text-info mx-3 text-decoration-none">LinkedIn</a>
          <a href="https://github.com/SurajGhodge" target="_blank" rel="noopener noreferrer" className="text-info mx-3 text-decoration-none">GitHub</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-info mx-3 text-decoration-none">Resume</a>
        </div>

        <p className="text-secondary small mb-0">
          © 2025 Suraj Ghodge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
