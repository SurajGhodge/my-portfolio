import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    { title: 'CRM Web Application', desc: 'A secure and feature-rich CRM system.', path: '/crm' },
    { title: 'Leave Management System', desc: 'A full-stack app for managing leave.', path: '/leave' },
    { title: 'Citizen Complaints Portal', desc: 'Register and track grievances easily.', path: '/citizen' },
    { title: 'Live Weather Info Web', desc: 'Displays real-time weather info.', path: '/weather' },
    { title: 'Online eCommerce Website', desc: 'Seamless product browsing & checkout.', path: '/ecommerce' },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((p) => (
            <div className="col-md-4 mb-4" key={p.title}>
              <div className="card card-hover-effect h-100">
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.desc}</p>
                  <Link to={p.path} className="btn btn-primary">
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
