import React from 'react';

function Skills() {
  const skills = ['React', 'Spring Boot', 'MySQL', 'Bootstrap', 'JavaScript', 'Java'];
  return (
    <section id="skills" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row text-center">
          {skills.map(skill => (
            <div className="col-6 col-md-4 mb-3" key={skill}>
              <div className="p-3 border rounded shadow-sm hover-shadow">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
