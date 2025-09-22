import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center text-center bg-light py-5"
      style={{ minHeight: '100vh' }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6">
            <motion.h1
              className="display-4 fw-bold"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm Suraj Ghodge
            </motion.h1>

            <motion.p
              className="lead"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Full-Stack Developer | React & Spring Boot Enthusiast
            </motion.p>

            <motion.a
              href="#projects"
              className="btn btn-primary btn-lg mt-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </div>

          {/* Photo */}
          <div className="col-md-6 mt-4 mt-md-0">
            <motion.img
              src="/myphoto1.png"
              alt="Suraj Ghodge"
              className="img-fluid rounded-circle shadow-lg hero-photo"
              style={{ maxWidth: '250px' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
