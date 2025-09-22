import React from 'react';

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <p className="text-center mx-auto w-75">
          I’m Suraj Ghodge, a Java developer with 3 years of experience creating web apps using Spring Boot, Hibernate, and RESTful APIs. I also enjoy working on the front end with React, HTML/CSS, and JavaScript, blending design and functionality.

I love building clean, efficient solutions, collaborating in Agile teams, and learning new technologies to keep improving my craft. Whether it’s backend services or a polished UI, I’m passionate about delivering software that works beautifully and solves real problems.
        </p>
        <div className="text-center mt-4">
          <a href="/resume.pdf" className="btn btn-outline-primary">Download Resume</a>
        </div>
      </div>
    </section>
  );
}
export default About;
