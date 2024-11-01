import React from 'react';
import './Style.css';
import Profile from "./images/maybeMe.jpg"
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>About Me</h1>
          <hr/>
          <motion.p
            initial = {{opacity:0}}
            animate= {{opacity:1, x:[-150, 0]}}
            whileInView={{ opacity: 1, x: 0 }} // Animate to center when in view
            transition={{duration:2}}
            viewport={{ once: false, amount: 0.8}}
          >
            Hi! My name is Oliver. I'm an up-and-coming software developer, 
            researcher, and amateur game developer. Currently, I'm in my third 
            year of undergraduate studies at the University of Toronto for Statistics 
            and Cognitive Science. I love to read, bike, take mediocre pictures of food, 
            and develop games in my free time.

          </motion.p>
          
        </div>
        <br />
        <div className="about-image">
          <img src={Profile} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
